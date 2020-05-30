/*
* 直方图组件
*/

import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

export default class Histogram extends Component{
	getOption = () => ({
		// title: {
		// 	text: 'ECharts 入门示例'
		// },
		tooltip: {},
		legend: {
			data:['销量']
		},
		xAxis: {
			data: []
		},
		yAxis: {},
		series: [{
			// name: '销量',
			type: 'bar',
			data: [5, 20, 36, 10, 10, 20]
		}]
	})
	
	render() {
		return (
			<ReactEcharts
				option={this.getOption()}
				style={{height: '100%', width: '100%'}}
				opts={{ renderer: 'svg' }}
				className='react_for_echarts' />
		)
	}
}
