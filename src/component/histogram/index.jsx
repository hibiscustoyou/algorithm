/*
* 直方图组件
*/

import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import _ from "lodash";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import store from '../../reduxUtils/store';

class Histogram extends Component{
	constructor(props) {
		super(props);
		this.state = {
			option: {
				tooltip: {},
				xAxis: {
					data: []
				},
				yAxis: {},
				series: [{
					type: 'bar',
					data: []
				}]
			}
		}
		store.subscribe(() => {
			let arrays = store.getState().input_array.arrays
			arrays = arrays ? arrays : []
			console.log('histogram sub', arrays, arrays.length)
			this.setState({
				option: {
					xAxis: {
						data: _.range(1, arrays.length+1)
					},
					series: [{
						type: 'bar',
						data: arrays
					}]
				}
			})
		})
	}
	
	render() {
		return (
			<ReactEcharts
				option={this.state.option}
				style={{height: '100%', width: '100%'}}
				opts={{ renderer: 'svg' }}
				className='react_for_echarts'
			/>
		)
	}
}

const mapStateToProps = state => {
	return state
}

const mapDispatchToProps = dispatch => {
	return {
	
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Histogram))
