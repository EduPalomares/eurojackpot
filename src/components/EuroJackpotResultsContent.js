import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import "./EuroJackpotResultsContent.css";
import CustomSelect from "../components/CustomSelect";
import { decimalToRoman, formatCurrency } from "../utils";


export default class EuroJackpotResults extends React.Component {

	constructor(props) {
		super(props);
		this.handleUpdateData = this.handleUpdateData.bind(this);
	}
	
	static propTypes = {
		data: PropTypes.object.isRequired,
		updatedata: PropTypes.func
	};
	
	handleUpdateData(val) {
		//this.props.updatedata(val);
	}
	
	render() {
		const data = this.props.data;
		const date = data.date;
		const years = _.range(date.year,2011,-1).map((y)=>{ return {label:y, value: y} });
		const days = [{label:"Fri 11 May",value:"11-05-2018"},{label:"Fri 04 May",value:"04-05-2018"},{label:"Fri 27 Apr",value:"27-04-2018"}]; // TODO: Friday/Year generator
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		
		
		return (
			<div className="ejp-results">
				<div className="top">
					<h1>eurojackpot results & winning numbers</h1>
					<div className="selects">
						<CustomSelect values={days} onchange={this.handleUpdateData} />
						<CustomSelect values={years} onchange={this.handleUpdateData} />
					</div>
				</div>
				
				<div className="results-info">
					<div className="day-info"><i>EuroJackpot</i> Results for Friday {date.day} {months[date.month-1].substr(0,3)} {date.year}</div> 
					<ul className="numbers">
						{data.numbers.map((n) => <li key={n}>{n}</li>)}
						{data.euroNumbers.map((n) => <li key={n} className="euronumber">{n}</li>)}
					</ul>
				</div>
				
				<div className="results-table">
					<table>
						<thead>
							<tr>
								<th>
									<i>Tier</i>
									<i>Match</i>
								</th>
								<th>
									<i>Winners</i>
									<i>Amount</i>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(1)}</i>
									<i>5 Numbers + <br /> 2 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank1.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank1.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(2)}</i>
									<i>5 Numbers + <br /> 1 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank2.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank2.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(3)}</i>
									<i>5 Numbers + <br /> 0 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank3.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank3.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(4)}</i>
									<i>4 Numbers + <br /> 2 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank4.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank4.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(5)}</i>
									<i>4 Numbers + <br /> 1 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank5.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank5.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(6)}</i>
									<i>4 Numbers + <br /> 0 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank6.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank6.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(7)}</i>
									<i>3 Numbers + <br /> 2 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank7.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank7.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(8)}</i>
									<i>2 Numbers + <br /> 2 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank8.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank8.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(9)}</i>
									<i>3 Numbers + <br /> 1 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank9.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank9.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(10)}</i>
									<i>3 Numbers + <br /> 0 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank10.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank10.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(11)}</i>
									<i>1 Numbers + <br /> 2 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank11.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank11.prize)}</b></i>
								</td>
							</tr>
							<tr>
								<td>
									<i className="tier">{decimalToRoman(12)}</i>
									<i>2 Numbers + <br /> 1 Euronumbers</i>
								</td>
								<td>
									<i>{data.odds.rank12.winners}x</i>
									<i><b>€{formatCurrency(data.odds.rank12.prize)}</b></i>
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
				
				<div className="right-info">
					<div className="info">
						<h2>The EuroJackpot numbers for {('0'+date.day).substr(-2)}.{('0'+date.month).substr(-2)}.{date.year}</h2>
						<p>The {data.nr}th draw for the EuroJackpot was held on {('0'+date.day).substr(-2)}.{('0'+date.month).substr(-2)}.{date.year}, as usual at 9pm in Helsinki.</p>
					</div>
					
					<div className="info">
						<h2>EuroJackpot numbers for {('0'+date.day).substr(-2)}.{('0'+date.month).substr(-2)}.{date.year}</h2>
						<p>The balls used for the draw are made of a synthetic polymer, softer than ping-pong balls. The results are broadcast after the draw, with the draw-machines independently checked by the VTT Technical Research Center of Finland.</p>
						<p>Lottoland published the draw results immediately after the draw on {('0'+date.day).substr(-2)}.{('0'+date.month).substr(-2)}.{date.year}. You can easily check your tickets here at Lottoland, or purchase your ticket for the next draw.</p>
					</div>
				</div>
				
			</div>
			
		)
	
	}
	
}