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
						data: {igp},
						backgroundColor: ['rbga(54, 162, 235, 0.6)']
					}
				]
			}
		}
	}

	render(){
		return(
			<div>
				<p> {this.props.igp} </p>
				<Line 
				data={this.state.chartData}
				options={{ maintainAspectRatio: false }}
				/>
			</div>
		)
	}
}

export default Chart;