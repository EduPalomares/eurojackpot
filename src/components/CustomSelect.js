import React from 'react';
import "./CustomSelect.css";

export default class CustomSelect extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: {}
		};
	}
	
	handleOnChange(event) {
		this.setState({value: event.target.value}, () => this.props.onchange(this.state.value));
	}
	
	render() {
		return (
			<div className="custom-select">
				<select onChange={this.handleOnChange.bind(this)}>
					{this.props.values.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
				</select>
			</div>
		)
	}
}