import React, {Component} from "react";
import { Menu } from 'antd';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";


import "./index.less"

import store from "../../reduxUtils/store"

import {HOME_PATH} from "../../reduxUtils/action-types";
import JsonUtils from "../../utils/jsonUtils"
import MenuConfig from "../../config/menuConfig";
import {IconFont} from "../icons";

const { SubMenu } = Menu;

class Menus extends Component {
	
	getTitle(currentPath) {
		let title;
		try {
			title = JsonUtils.GetObjects(MenuConfig, 'key', currentPath)[0].title
		} catch (e) {
			title = 'Home'
		}
		return title
	}
	
	constructor(props) {
		super(props);
		this.rootSubmenuKeys = JsonUtils.GetValues(MenuConfig, 'key', false);
		// this.rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
		
		const currentPath = this.props.location.pathname;
		const openKeys = JsonUtils.GetObjectParent(MenuConfig, 'key', currentPath)
		this.state = {
			title: this.getTitle(currentPath),
			openKeys: [openKeys],
			selectedKeys: [currentPath]
		};
		console.log('menus pre', this.state, currentPath, openKeys)
		// store.subscribe(() => {
		// 	this.setState(store.getState().home_key)
		// 	console.log('menus store change', store.getState().home_key)
		// })
	}
	
	handleClick = value => {
		this.props.HomePathAction({
			title: this.getTitle(value.keyPath[0]),
			openKeys: [value.keyPath[1]],
			selectedKeys: [value.keyPath[0]]
		})
		console.log('menu change', value.keyPath[0], value.keyPath[1], this.state)
	};
	
	onOpenChange = openKeys => {
		console.log('menu open change', openKeys)
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({ openKeys });
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			});
		}
	};
	
	getMenuNodes = (MenuConfig) => {
		return MenuConfig.reduce((pre, item) => {
			// 获取当前请求路由路径
			const currentPath = this.props.location.pathname;
			if (!item.children) {
				// 向 pre 添加 <Menu.Item>
				pre.push((
					<Menu.Item key={item.key}>
						<Link to={item.key}>
							<IconFont type={item.icon} />
							<span>{item.title}</span>
						</Link>
					</Menu.Item>
				))
			} else {
				const childrenItem = item.children.find(childrenItem => childrenItem.key===currentPath);
				if (childrenItem) {
					this.openKey = item.key
				}
				
				// 向 pre 添加 <SubMenu>
				pre.push((
					<SubMenu
						key={item.key}
						title={
							<span>
                                <IconFont type={item.icon} />
								<span>{item.title}</span>
                            </span>
						}
					>
						{this.getMenuNodes(item.children)}
					</SubMenu>
				))
			}
			return pre
		}, [])
	}
	
	componentWillMount() {
		this.menuNodes = this.getMenuNodes(MenuConfig);
	}
	
	componentDidMount() {
		const currentPath = this.props.location.pathname;
		const openKeys = JsonUtils.GetObjectParent(MenuConfig, 'key', currentPath)
		
		this.setState({
			title: this.getTitle(currentPath),
			openKeys: [openKeys],
			selectedKeys: [currentPath]
		})
		this.props.HomePathAction({
			title: this.getTitle(currentPath),
			openKeys: openKeys,
			selectedKeys: currentPath
		})
		console.log('menu home did', this.state, currentPath, openKeys, this.getTitle(currentPath))
	}
	
	render() {
		return (
			<Menu
				mode="inline"
				openKeys={this.state.openKeys}
				onClick={this.handleClick}
				onOpenChange={this.onOpenChange}
				style={{ width: 256 }}
				defaultOpenKeys={this.state.openKeys}
				defaultSelectedKeys={this.state.selectedKeys}
			>
				{this.menuNodes}
			</Menu>
		);
	}
}

const mapStateToProps = state => {
	return state
}

const mapDispatchToProps = dispatch => {
	return {
		HomePathAction: (data) => {
			dispatch({
				type: HOME_PATH,
				payload: data
			})
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menus));

