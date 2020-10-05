import React, { Component } from 'react';
import Card from './Card';
import Chart from './Chart';

const Cardlist = ({ unis }) => {
	return (
		<div>
		  {
		  	unis.map((courses, i) => {
				return (
					<Card 
						key={i} 
						id={unis[i].id} 
						uni={unis[i].uni} 
						name={unis[i].name} 
						igp={unis[i].igp[i]}
						currentigp={unis[i].igp}
						gpa={unis[i].gpa} 
						admit={unis[i].admit}
					/>
				);
			})
		  }
			
		</div>
	);
}

export default Cardlist;