import React, { Component } from 'react';

class EditBtn extends Component {
	constructor(props) {
		super(props);
		this.state = { id: this.props.id, name: this.props.name };
		this.editItem = this.editItem.bind(this);
	}

	editItem() {
		this.props.editItem(this.state.id, this.state.name);
	}

	render() {
		return (
			<i className="fa fa-pencil" aria-hidden="true" onClick={this.editItem}></i>
		)
	}
}

export default EditBtn;