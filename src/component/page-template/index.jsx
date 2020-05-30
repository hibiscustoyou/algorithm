// 导入系统组件
import React, {Component} from "react";
import DocumentTitle from "react-document-title";
import {withRouter} from "react-router-dom";
import {Layout, Typography, Input, Tooltip, Button} from 'antd';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { Scrollbars } from 'react-custom-scrollbars';

import store from "../../reduxUtils/store"

// 导入自定义组件
import Menus from "../menus"

// 导入样式表
import "./index.less";

// 导入图片
import {INPUT_ARRAY} from "../../reduxUtils/action-types";
import JsonUtils from "../../utils/objectUtils";
import MenuConfig from "../../config/menuConfig";
import {IconFont} from "../icons";
import Radios from "../radios";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

import ArrayUtils from "../../utils/arrayUtils"
import RegUtils from "../../utils/regUtils"
import Histogram from "../histogram";

const { Sider } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;


class PageTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.state
    
        const currentPath = this.props.location.pathname;
        const openKeys = JsonUtils.GetObjectParent(MenuConfig, 'key', currentPath)
        let title;
        try {
            title = JsonUtils.GetObjects(MenuConfig, 'key', currentPath)[0].title
        } catch (e) {
            title = 'Home'
        }
    
        const defaultStyle = makeStyles((theme) => ({
			root: {
				padding: '2px 4px',
				display: 'flex',
				alignItems: 'center',
				width: '100%',
			},
			input: {
				marginLeft: theme.spacing(1),
				flex: 1,
			},
			iconButton: {
				padding: 10,
			},
			divider: {
				height: 28,
				margin: 4,
			},
		}));
        
        this.state.title = title
        this.state.openKeys = openKeys
        this.state.selectedKeys = currentPath
        this.state = {
            title: title,
            openKeys: openKeys,
            selectedKeys: currentPath,
            style: defaultStyle,
            curInput: {
                add: '',
                remove: '',
                find: ''
            },
            arrays: []
        }
    
        store.subscribe(() => {
            this.setState({
                title: store.getState().home_key.title,
                openKeys: store.getState().home_key.openKeys,
                selectedKeys: store.getState().home_key.selectedKeys,
                arrays: store.getState().input_array.arrays
            })
        })
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    
    addChange = event => {
        const text = event.target.value
        const flag = RegUtils.IsMatch(text)
        console.log('page temp addchange', flag, text)
        if (flag) {
            this.setState({
                curInput: {
                    add: parseFloat(text)
                }
            })
        } else if (!flag && text) {
            this.setState({
                curInput: {
                    add: text
                }
            })
        } else {
            this.setState({
                curInput: {
                    add: ''
                }
            })
        }
    }
    add = () => {
        let tempArrays = this.state.arrays ? this.state.arrays : []
        tempArrays.push(this.state.curInput.add)
        // console.log('page temp add', this.state, tempArrays)
        this.props.inputArray({
            arrays: tempArrays
        })
        this.setState({
            curInput: {
                add: ''
            },
        })
    }
    
    removeChange = event => {
        const text = event.target.value
        const flag = RegUtils.IsMatch(text)
        if (flag) {
            this.setState({
                curInput: {
                    remove: parseFloat(text)
                }
            })
        } else if (!flag && text) {
            this.setState({
                curInput: {
                    remove: text
                }
            })
        } else {
            this.setState({
                curInput: {
                    remove: ''
                }
            })
        }
    }
    remove = () => {
        let tempArrays = this.state.arrays ? this.state.arrays : []
        tempArrays = ArrayUtils.DeleteItem(tempArrays, this.state.curInput.remove)
        console.log('page temp add', this.state, tempArrays)
        this.props.inputArray({
            arrays: tempArrays
        })
        this.setState({
            curInput: {
                remove: ''
            },
        })
    }
    
    /*
	* todo
	*  search
	*/
    searchChange = event => {
    }
    search = () => {
    }
    
    /*
	* todo
	*  print
	*/
    printChange = event => {
    }
    print = () => {
    }
    
    /*
	* todo
	*  clear
	*/
    clearChange = event => {
    }
    clear = () => {
        this.props.inputArray({})
    }
    
    paper = (placeholder, add, change, icon, click, flag) => {
        return (
            <Paper
                component="form"
                className={this.state.style.root}
            >
                
                <InputBase
                    className={this.state.style.input}
                    placeholder={placeholder}
                    value={add}
                    onChange={change}
                />
                <Button
                    type="primary" shape="circle"
                    icon={icon}
                    onClick={click}
                    disabled={flag}
                />
            </Paper>
        )
    }
    
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
                        <Scrollbars
                            autoHide
                            // Hide delay in ms
                            autoHideTimeout={1000}
                            // Duration for hide animation in ms.
                            autoHideDuration={200}>
                        >
                            <Menus />
                        </Scrollbars>
                    </Sider>

                    <Sider className="sider-right">
                        <Title level={2} >{this.state.title}</Title>
                        <div className="array-input">
                            <div>
                                {this.paper(
                                    'add',
                                    this.state.curInput.add,
                                    this.addChange,
                                    <IconFont type='icon-jia' />,
                                    this.add,
                                    !RegUtils.IsMatch(this.state.curInput.add)
                                )}
                            </div>
                            <div>
                                {this.paper(
                                    'remove',
                                    this.state.curInput.remove,
                                    this.removeChange,
                                    <IconFont type='icon-jian' />,
                                    this.remove,
                                    !RegUtils.IsMatch(this.state.curInput.remove)
                                )}
                            </div>
                            <div>
                                {this.paper(
                                    'search',
                                    this.state.curInput.search,
                                    this.searchChange,
                                    <IconFont type='icon-jia' />,
                                    this.search,
                                    !RegUtils.IsMatch(this.state.curInput.search)
                                )}
                            </div>
                            <div style={{width: 'fit-content'}}>
                                <Paper
                                    component="form"
                                    className={this.state.style.root}
                                    style={{width: '40px'}}
                                >
        
                                    <InputBase
                                        className={this.state.style.input}
                                        placeholder={this.state.placeholder}
                                        value={this.state.curInput.print}
                                        onChange={this.printChange}
                                        style={{
                                            width: "0",
                                            height: "100%"
                                        }}
                                    />
                                    <Button
                                        type="primary" shape="circle"
                                        icon={<IconFont type='icon-print' />}
                                        onClick={this.print}
                                    />
                                </Paper>
                            </div>
                            <div style={{width: 'fit-content'}}>
                                <Paper
                                    component="form"
                                    className={this.state.style.root}
                                    style={{width: '40px'}}
                                >
        
                                    <InputBase
                                        className={this.state.style.input}
                                        placeholder='clear'
                                        value={this.state.curInput.clear}
                                        onChange={this.clearChange}
                                        style={{
                                            width: "0",
                                            height: "100%"
                                        }}
                                    />
                                    <Button
                                        type="primary" shape="circle"
                                        icon={<IconFont type='icon-shanchu' />}
                                        onClick={this.clear}
                                    />
                                </Paper>
                            </div>
                            <div style={{
                                width: 'fit-content',
                                display: (this.state.openKeys[0] === '/indexing' || this.state.openKeys === '/indexing') ? '' : 'none'
                            }}>
                                <Radios />
                            </div>
                        </div>
    
                        <Text type="danger">
                            {
                                (!RegUtils.IsMatch(this.state.curInput.add) && this.state.curInput.add) ?
                                    '限定输入为数字' : ''
                            }
                        </Text>
                        <div className="print-input">
                            <Input.TextArea
                                placeholder=""
                                autoSize disabled={true}
                                value={this.state.arrays}
                            />
                        </div>
                        <div className="charts">
                            <div className="charts-top">
                                <Histogram />
                            </div>
                        </div>
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
        inputArray: (data) => {
            dispatch({
                type: INPUT_ARRAY,
                payload: data
            })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageTemplate));
