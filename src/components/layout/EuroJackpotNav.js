import React from 'react';
import { NavLink } from "react-router-dom";
import './EuroJackpotNav.css';

export default class EuroJackpotNav extends React.Component {

	render() {
		return (
			<nav>
				<ul>
					<NavLink exact to="/" activeClassName="active"><li>EuroJackpot</li></NavLink>
					<NavLink to="/results-winning-numbers" activeClassName="active"><li>EuroJackpot Results & Price Breakdown</li></NavLink>
					<NavLink to="/help" activeClassName="active"><li>EuroJackpot Help & Faq</li></NavLink>
				</ul>
			
			</nav>
		)
	}
}