import React, { Component } from 'react';
import Cardlist from './components/Cardlist';
import SearchBox from './components/SearchBox';
import Gpa_SearchBox from './components/gpa_SearchBox';
import { unis } from './components/unis';
import Chart from './components/Chart';

class App extends Component {
	constructor() {
		super()
		this.state = {
			unis: unis,
			searchfield: '',
			gpa_searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	};

	onGpaChange = (event) => {
		this.setState({ gpa_searchfield: Number(event.target.value) })
	};

	render() {
		const filteredUnis = this.state.unis.filter(uni => {
			return uni.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		
		
		return (
			<div className='tc'>
				<h1>The University Entrance Calculator</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Gpa_SearchBox gpa_searchChange={this.onGpaChange}/>
				<Cardlist unis={ filteredUnis }/>
			</div>
		)
	}
}

export default App;