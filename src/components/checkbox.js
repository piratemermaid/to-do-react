import React, { Component } from 'react';

const Checkbox = (props) => {
	function handleClick() {
		if(props.checked === true) {
			props.checkItem(props.id, false, props.name);
		}
		else {
			props.checkItem(props.id, true, props.name);
		}
	}

	if(props.checked === true) {
		return(
			<div className="checkbox" onClick={handleClick} >✓</div>
		);
	}
	else {
		return(
			<div className="checkbox" onClick={handleClick} ></div>
		);
	}
}

// class Checkbox extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.checkItem = this.checkItem.bind(this);
// 		this.state = { id: this.props.id, checked: this.props.checked, name: this.props.name };
// 	}

// 	checkItem() {
// 		if(!this.state.checked) {
// 			this.setState({ checked: true });
// 		}
// 		else {
// 			this.setState({ checked: false });
// 		}
// 		this.props.checkItem(this.state.id, !this.state.checked, this.state.name);
// 	}

// 	render() {
// 		// console.log(this.state.checked);
// 		// console.log('id: ' + this.state.id + ' and checked: ' + this.state.checked);
// 		// if(this.props.allChecked === true) {
// 		// 	return(
// 		// 		<div className="checkbox" onClick={this.checkItem}>
// 		// 			<div className="checkmark">✓</div>
// 		// 		</div>
// 		// 	);
// 		// }
// 		// else if(this.props.allUnchecked === true) {
// 		// 	return (
// 		// 		<div className="checkbox" onClick={this.checkItem} ></div>
// 		// 	);
// 		// }
// 		// else {
// 			if (this.props.checked === false) {
// 				return (
// 					<div className="checkbox" onClick={this.checkItem} ></div>
// 				);
// 			}
// 			else {
// 				return (
// 					<div className="checkbox" onClick={this.checkItem}>
// 						<div className="checkmark">✓</div>
// 					</div>
// 				);
// 			}
// 		// }
// 	}
// }

export default Checkbox;