import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
	constructor(props, igp){
		super(props, igp);
		this.state = {
			chartData:{
				labels: ['2010', '2011', '2012', '2013', '2014',
				 '2015', '2016', '2017', '2018', '2019'],
				datasets:[
					 {
					 	label: '10th Percentile IGP (Rank Points)',
						data: [85, 83.75 ,85 ,85 ,85 ,82.5, 75, 72.5, 76.25, 78.75],
						backgroundColor: ['rbga(54, 162, 235, 0.6)']
					}
				]
			}
		}
	}
	render(){
		return(
			<div>
				<p> hi </p>
				<Line 
				data={this.state.chartData}
				options={{ maintainAspectRatio: true }}
				/>
			</div>
		)
	}
}

export default Chart;