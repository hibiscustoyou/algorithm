// 导入系统组件
import React, {Component} from "react";
import DocumentTitle from "react-document-title";
import {withRouter} from "react-router-dom";
import {Layout} from 'antd';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import store from "../../reduxUtils/store"

// 导入自定义组件
import Menus from "../menus"

// 导入样式表
import "./index.less";

// 导入图片
import {HOME_PATH} from "../../reduxUtils/action-types";
import JsonUtils from "../../utils/jsonUtils";
import MenuConfig from "../../config/menuConfig";

const { Sider } = Layout;


class PageTemplate extends Component {
    
    // static defaultProps = {
    //     collapsed: true,
    // }

    constructor(props) {
        super(props);
        console.log('page temp this.props', this.props)
        this.state = this.props.state
    
        const currentPath = this.props.location.pathname;
        const openKeys = JsonUtils.GetObjectParent(MenuConfig, 'key', currentPath)
        let title;
        try {
            title = JsonUtils.GetObjects(MenuConfig, 'key', currentPath)[0].title
        } catch (e) {
            title = 'Home'
        }
        this.state.title = title
        this.state.openKeys = openKeys
        this.state.selectedKeys = currentPath
        console.log('page temp pre state1', title, this.state)
    
        store.subscribe(() => {
            this.setState({
                title: store.getState().home_key.title,
                openKeys: openKeys,
                selectedKeys: currentPath
            })
            console.log('page temp pre sub', store.getState().home_key)
        })
        console.log('page temp pre state2', title, this.state)
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    
    componentWillMount() {
    }
    
    componentDidMount() {
    }

    render() {
        const container = (
            <Layout className="home">
                <Layout>
                    {/* 固定左侧菜单栏 */}
                    <Sider
                        className="sider-left"
                        trigger={null} collapsible collapsed={this.state.collapsed}
                        
                    >
                        <Menus />
                    </Sider>

                    {/* 固定右侧，用来显示历史聊天记录框 */}
                    <Sider className="sider-right">
                        sider
                    </Sider>
                </Layout>
            </Layout>
        )

        return (
            <DocumentTitle title={this.state.title}>
                {container}
            </DocumentTitle>
        )
    }
}

PageTemplate.propTypes = {
    state: PropTypes.object
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        HomeKeyAction: (data) => {
            dispatch({
                type: HOME_PATH,
                payload: data
            })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageTemplate));
