import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class LineChart extends Component {

	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
	}

	render() {
		return (
			<div>
				<canvas
				  id="0"
				  ref={this.chartRef}
				/>
			</div>
			)
	}
}