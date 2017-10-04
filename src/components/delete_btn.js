import React, { Component } from 'react';

class DeleteBtn extends Component {
	constructor(props) {
		super(props);
		this.state = { id: this.props.id, name: this.props.name };
		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem() {
		// console.log('delete ' + this.state.name);
		this.props.deleteItem(this.state.id, this.state.name);
	}

	render() {
		return (
			<i className="fa fa-trash" aria-hidden="true" onClick={this.deleteItem} ></i>
		)
	}
}

export default DeleteBtn;