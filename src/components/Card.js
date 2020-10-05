import React, { Component } from 'react';
import Chart from './Chart';

const Card = ({ uni, name, igp, currentigp,  gpa, admit }) => {
		return(
			<div className ='bg-light-green db br3 pa3 ma2 grow bw2 shadow-5 center w-80'>
				<h2>{uni} {name}</h2>
				<p>2019 IGP: {igp}</p>
				<p>2019 Poly GPA: {gpa}</p>
				<p>Freshmen Admitted: {admit}</p>
				
			</div>
		);
	
}

export default Card;