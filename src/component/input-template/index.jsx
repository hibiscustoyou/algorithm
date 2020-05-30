// import React, {Component} from 'react';
// import PropTypes from "prop-types";
// import { Button } from 'antd';
// import {withRouter} from "react-router-dom";
// import {connect} from "react-redux";
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import IconButton from '@material-ui/core/IconButton';
//
// import "./index.less"
// import { INPUT_ARRAY } from "../../reduxUtils/action-types";
//
// class InputTemplate extends Component{
// 	constructor(props) {
// 		super(props);
// 		const defaultStyle = makeStyles((theme) => ({
// 			root: {
// 				padding: '2px 4px',
// 				display: 'flex',
// 				alignItems: 'center',
// 				width: '100%',
// 			},
// 			input: {
// 				marginLeft: theme.spacing(1),
// 				flex: 1,
// 			},
// 			iconButton: {
// 				padding: 10,
// 			},
// 			divider: {
// 				height: 28,
// 				margin: 4,
// 			},
// 		}));
//
// 		console.log('input temp pre', callbackFuncDict[this.props.callbackFunc ? this.props.callbackFunc : null])
// 		this.state = {
// 			style: this.props.style ? this.props.style : defaultStyle,
// 			placeholder: this.props.placeholder ? this.props.placeholder : 'input',
// 			icon: this.props.icon ? this.props.icon : null,
// 			isInput: typeof this.props.isInput === "boolean" ? this.props.isInput : true,
// 			isIcon: typeof this.props.isIcon === "boolean" ? this.props.isIcon : true,
// 			callbackFunc: this.props.callbackFunc ? this.props.callbackFunc : null
// 		}
// 	}
//
// 	// add(e) {
// 	// 	console.log('add e', e)
// 	// 	return 'add'
// 	// }
// 	// remove() {
// 	// 	console.log('remove')
// 	// }
// 	// search() {
// 	// 	console.log('search')
// 	// }
// 	// print() {
// 	// 	console.log('print')
// 	// }
// 	// clear() {
// 	// 	console.log('clear')
// 	// }
//
// 	componentDidMount() {
// 		console.log('input temp did', this.state.callbackFunc)
// 	}
//
// 	render() {
//
// 		const add = e => {
// 			console.log('add e', e)
// 		}
//
// 		const remove = e => {
// 			console.log('remove e', e)
// 		}
//
// 		const search = e => {
// 			console.log('search e', e)
// 		}
//
// 		const print = e => {
// 			console.log('print e', e)
// 		}
//
// 		const clear = e => {
// 			console.log('clear e', e)
// 		}
//
// 		const callbackFuncDict = (key) => {
// 			switch (key) {
// 				case 'add':
// 					return add()
// 				case 'remove':
// 					return remove()
// 				case 'search':
// 					return search()
// 				case 'print':
// 					return print()
// 				case 'clear':
// 					return clear()
// 				default:
// 					return null
// 			}
// 		}
//
// 		return (
// 			<Paper
// 				component="form"
// 				className={this.state.style.root}
// 				style={{width: this.state.isInput ? '' : '40px'}}
// 			>
//
// 				<InputBase
// 					className={this.state.style.input}
// 					placeholder={this.state.placeholder}
// 					style={{
// 						width: this.state.isInput? "" : "0",
// 						height: "100%"
// 					}}
// 				/>
// 				{/*<IconButton*/}
// 				{/*	type="submit" className={this.state.style.iconButton}*/}
// 				{/*	aria-label="search"*/}
// 				{/*	style={{*/}
// 				{/*		display: this.state.isIcon ? "" : "none"*/}
// 				{/*	}}*/}
// 				{/*	onClick={this.state.callbackFunc}*/}
// 				{/*>*/}
// 				{/*	{this.state.icon}*/}
// 				{/*</IconButton>*/}
// 				<Button type="primary" shape="circle" icon={this.state.icon} onClick={callbackFuncDict(this.state.callbackFunc)} />
// 			</Paper>
// 		)
// 	}
// }
//
// InputTemplate.propTypes = {
// 	style: PropTypes.object,
// 	placeholder: PropTypes.string,
// 	icon: PropTypes.object,
// 	isInput: PropTypes.bool,
// 	isIcon: PropTypes.bool,
// 	callbackFunc: PropTypes.string
// }
//
// const mapStateToProps = state => {
// 	return state
// }
//
// const mapDispatchToProps = dispatch => {
// 	return {
// 		InputArrayAction: (data) => {
// 			dispatch({
// 				type: INPUT_ARRAY,
// 				payload: data
// 			})
// 		}
// 	}
// }
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InputTemplate));