import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import EuroJackpotNav from "../components/layout/EuroJackpotNav";

import EuroJackpot from './EuroJackpot';
import EuroJackpotResults from './EuroJackpotResults';
import EuroJackpotFaq from './EuroJackpotFaq';


export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				
				<Router>
					<div>
						<EuroJackpotNav />
						<Route exact path="/" component={EuroJackpot}></Route>
						<Route path="/results-winning-numbers" component={EuroJackpotResults} />
						<Route path="/help" component={EuroJackpotFaq} />
					</div>
				</Router>
	
				<Footer />
			</div>
		);
	}
}