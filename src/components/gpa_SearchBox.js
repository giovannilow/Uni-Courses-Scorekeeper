import React from 'react';

const gpa_SearchBox = ({ gpa_searchChange }) => {
	return (
		<div className='pa2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='Enter your Poly GPA'
			onChange = {gpa_searchChange}
			 />			
		</div>
	);
}

export default gpa_SearchBox;