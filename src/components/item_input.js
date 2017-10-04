import React, { Component } from 'react';

class ItemInput extends Component {
	constructor(props) {
		super(props);
		this.state = { input: '' }
		this.handleChange = this.handleChange.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	handleChange(e) {
		this.setState({ input: e.target.value });
	}

	addItem(e) {
		e.preventDefault();
		this.setState({ input: e.target.value });
		this.props.onInputEntry(this.state.input);
		// this.setState({ input: '' });
	}
	
	render() {
		return (
			<div className="row">
				<form onSubmit={this.addItem}>
					<div className="col-md-11 col-sm-10 col-xs-8">
						<input value={this.state.input} onChange={this.handleChange} type="text" placeholder="Enter to-do item" ref="addInput" className="input-item" />
					</div>
					<div className="col-md-1 col-sm-2 col-xs-4">
						<button className="add-btn">Add</button>
					</div>
				</form>
			</div>
		);
	}
}

export default ItemInput;

 // onChange={this.handleChange}