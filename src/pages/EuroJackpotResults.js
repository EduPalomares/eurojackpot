import React from 'react';
import jsonp from 'jsonp';
import _ from 'underscore';

import EuroJackpotResultsContent from '../components/EuroJackpotResultsContent';

export default class EuroJackpotResults extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}
	
	getData() {
		// TODO: Use Day param to update values
		jsonp('https://media.lottoland.com/api/drawings/euroJackpot/', null, 
			(err,data) => {
				this.setState({data: data.last});
			}
		);
	}
	
	componentDidMount() {
		this.getData();
	}
	
	render() {
		
		const content = (!_.isEmpty(this.state.data)) ? <EuroJackpotResultsContent data={this.state.data} updatedata={this.getData} /> : '';
		
		return (
			<div>
				{content}
			</div>
		)
	
	}
	
}