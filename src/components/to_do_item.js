import React from 'react';

// const ToDoItem = (props) => {
// 	if(props.editing === true) {
// 		return(
// 			<div>
// 				<input type="text" className="edit-item" placeholder="Enter new task" autofocus="autofocus" />
// 			</div>
// 		);
// 	}
// 	else if(props.checked === true) {
// 		return(
// 			<div>
// 				<s><i>{props.name}</i></s>
// 			</div>
// 		);
// 	}
// 	else {
// 		return(
// 			<div>
// 				{props.name}
// 			</div>
// 		);
// 	}
// }

class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
		this.handleEditSubmit = this.handleEditSubmit.bind(this);
		this.handleEditChange = this.handleEditChange.bind(this);
	}

	handleEditSubmit(e) {
		e.preventDefault();
		this.props.changeItem(this.props.id, this.state.name);
		this.setState({ name: '' })
	}

	handleEditChange(e) {
		this.setState({ name: e.target.value })
	}

	render() {
		if(this.props.editing === true) {
			return(
				<div>
					<form onSubmit={this.handleEditSubmit}>
					<input type="text" className="edit-item" placeholder="Enter new task" autofocus="autofocus"
						value={this.state.name}
						onChange={this.handleEditChange} />
					</form>
				</div>
			);
		}
		else if(this.props.checked === true) {
			return (
				<div>
					<s><i>{this.props.name}</i></s>
				</div>
			);
		}
		else {
			return (
				<div>
					{this.props.name}
				</div>
			);
		}
	}
}

export default ToDoItem;