import React from 'react';

import Checkbox from './checkbox';
import ToDoItem from './to_do_item';
import EditBtn from './edit_btn';
import DeleteBtn from './delete_btn';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);

		// this.state = { editing: false };
	}

	checkItem(id, checked, name) {
		this.props.checkItem(id, checked, name);
	}

	editItem(id, name) {
		this.props.editItem(id, name);
	}

	deleteItem(id, name) {
		this.props.deleteItem(id, name);
	}

	// changeItem(id, name) {
	// 	this.props.changeItem(id, name);
	// }

	render() {
		const toDoList = this.props.toDoList.map((item) => {
			if(this.props.viewAll === true) {
				return (
					<div key={item.id}>
						<li className="list-group-item">
							<div className="col-md-10">
								<Checkbox
									id={item.id}
									checked={item.checked}
									name={item.name}
									checkItem={this.checkItem.bind(this)} />
								<ToDoItem
									name={item.name}
									checked={item.checked}
									id={item.id}
									editing={item.editing}
									changeItem={this.props.changeItem} />
							</div>
							<div className="col-md-1">
								<EditBtn
									editItem={this.editItem.bind(this)}
									id={item.id}
									name={item.name} />
							</div>
							<div className="col-md-1">
								<DeleteBtn
									id={item.id}
									name={item.name}
									deleteItem={this.deleteItem.bind(this)} />
							</div>
						</li>
					</div>
				);
			}
			else if(this.props.viewToDo === true) {
				if(item.checked === false) {
					return (
						<div className="row col-md-12" key={item.id} >
							<li className="list-group-item">
								<div className="col-md-10">
									<Checkbox
										id={item.id}
										checked={item.checked}
										name={item.name}
										checkItem={this.checkItem.bind(this)} />
									<ToDoItem name={item.name}
										checked={item.checked} />
								</div>
								<div className="col-md-1">
									<EditBtn
										editItem={this.editItem.bind(this)}
										id={item.id}
										name={item.name} />
								</div>
								<div className="col-md-1">
									<DeleteBtn
										id={item.id}
										name={item.name}
										deleteItem={this.deleteItem.bind(this)} />
								</div>
							</li>
						</div>
					);
				}
			}
			else {
				if(item.checked === true) {
					return (
						<div className="row col-md-12" key={item.id} >
							<li className="list-group-item">
								<div className="col-md-10">
									<Checkbox
										id={item.id}
										checked={item.checked}
										name={item.name}
										checkItem={this.checkItem.bind(this)} />
									<ToDoItem name={item.name}
										checked={item.checked} />
								</div>
								<div className="col-md-1">
									<EditBtn
										editItem={this.editItem.bind(this)}
										id={item.id}
										name={item.name} />
								</div>
								<div className="col-md-1">
									<DeleteBtn
										id={item.id}
										name={item.name}
										deleteItem={this.deleteItem.bind(this)} />
								</div>
							</li>
						</div>
					);
				}
			}
		});
		
		return (
			<ul className="list-group">
				{toDoList}
			</ul>
		);
	}
};

export default ToDoList;