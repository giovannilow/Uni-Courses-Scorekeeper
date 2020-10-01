import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData: {
				labels: ['2010', '2011', '2012', '2013', '2014',
				 '2015', '2016', '2017', '2018', '2019'],
				 datasets:[
					 {
					 	label: 'IGP(Rank Point) profile over the last 10 years',
						data:[
							 78.75, 76.25,
							 72.5, 75,
							 82.5, 85,
							 85, 85,
							 83.75, 85
						],
						backgroundColor: ['rbga(54, 162, 235, 0.6)']
					}
				]
			}
		}
	}

	render(){
		return(
			<div className='chart'>
			<Line
			  data={this.state.chartData}
			  options={{maintainAspectRatio: false}}
			/>
			</div>
		)
	}
}

export default Chart;