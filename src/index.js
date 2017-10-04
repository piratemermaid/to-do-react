import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ItemInput from './components/item_input';
import ToDoList from './components/to_do_list';
import Options from './components/options';

class App extends Component {
	constructor(props) {
		super(props);
		this.state= {
			toDoList: [
			],
			index: 0,
			numberToDo: 0,
			allChecked: false,
			allUnchecked: false,
			viewAll: true,
			viewToDo: false,
			viewCompleted: false
		}
	}

	addToDo(newToDo) {
		if(newToDo) {
			var newToDoList = this.state.toDoList;
			var index = this.state.index;

			newToDoList.push({ id: index, name: newToDo, checked: false });
			this.setState({ toDoList: newToDoList });
			
			index++;
			this.setState({ index });
		}
		this.countItems();
	}

	checkItem(id, checked, name) {
		var newToDoList = this.state.toDoList;
		for(var i = 0; i < newToDoList.length; i++) {
			if(newToDoList[i].id === id) {
				newToDoList[i].checked = checked;
			}
		}
		this.setState({ toDoList: newToDoList });
		this.countItems();
		this.checkIfAllSame();
	}

	editItem(id, name) {
		var newToDoList = this.state.toDoList;
		for(let i = 0; i < newToDoList.length; i++) {
			if(newToDoList[i].name === name) {
				newToDoList[i].editing = true;
			}
		}
		this.setState({ toDoList: newToDoList });
	}

	changeItem(id, name) {
		var newToDoList = this.state.toDoList;
		for(let i = 0; i < newToDoList.length; i++) {
			if(newToDoList[i].id === id) {
				if(name != '') {
					newToDoList[i].name = name;
				}
				newToDoList[i].editing = false;
			}
		}
		this.setState({ toDoList: newToDoList });
	}

	deleteItem(id, name) {
		var newToDoList = this.state.toDoList;
		var index;
		for(var i = 0; i < this.state.toDoList.length; i++) {
			if(this.state.toDoList[i].id === id) {
				newToDoList.splice(i, 1);
			}
		}
		this.setState({ toDoList: newToDoList });
		this.countItems();
		this.checkIfAllSame();
	}

	countItems() {
		let numItems = 0;
		for(var i = 0; i < this.state.toDoList.length; i++) {
			if(this.state.toDoList[i].checked === false) {
				numItems++;
			}
		}
		this.setState({ numberToDo: numItems });
	}

	checkAll() {
		var newToDoList = this.state.toDoList;
		for(var i = 0; i < newToDoList.length; i++) {
			newToDoList[i].checked = true;
		}
		this.setState({ toDoList: newToDoList, allChecked: true, allUnchecked: false });
		this.countItems();
	}

	uncheckAll() {
		var newToDoList = this.state.toDoList;
		for(var i = 0; i < newToDoList.length; i++) {
			newToDoList[i].checked = false;
		}
		this.setState({ toDoList: newToDoList, allChecked: false, allUnchecked: true });
		this.countItems();
	}

	checkIfAllSame() {
		var unchecked = 0;
		var checked = 0;
		var total = this.state.toDoList.length;

		for(var i = 0; i < this.state.toDoList.length; i++) {
			if(this.state.toDoList[i].checked === true) {
				checked++;
			}
			else {
				unchecked++;
			}
		}
		if(this.state.toDoList.length > 0) {
			if(unchecked === this.state.toDoList.length) {
				this.setState({ allUnchecked: true });
				this.setState({ allChecked: false });
			}
			else if(checked === this.state.toDoList.length) {
				this.setState({ allChecked: true });
				this.setState({ allUnchecked: false });
			}
			else {
				this.setState({ allChecked: false });
				this.setState({ allUnchecked: false });
			}
		}
	}

	viewAll() {
		this.setState({ viewAll: true, viewToDo: false, viewCompleted: false });
	}

	viewToDo() {
		this.setState({ viewAll: false, viewToDo: true, viewCompleted: false });
	}

	viewCompleted() {
		this.setState({ viewAll: false, viewToDo: false, viewCompleted: true });
	}

	deleteCompleted() {
		var newToDoList = this.state.toDoList;
		for(var i = 0; i < this.state.toDoList.length; i++) {
			if(this.state.toDoList[i].checked === true) {
				newToDoList.splice(i, 1);
				i--;
			}
		}
		this.setState({ toDoList: newToDoList });
		this.countItems();
		this.checkIfAllSame();
	}

	render() {
		return (
			<div className="panel panel-default row">
				<div className="panel-heading">
					<h1>To Do</h1>
				</div>
				<div className="panel-body">
					<ItemInput className="to-do-input"
						onInputEntry={this.addToDo.bind(this)} />
				</div>
				<ToDoList
					toDoList={this.state.toDoList}
					checkItem={this.checkItem.bind(this)}
					editItem={this.editItem.bind(this)}
					changeItem={this.changeItem.bind(this)}
					deleteItem={this.deleteItem.bind(this)}
					allChecked={this.state.allChecked}
					allUnchecked={this.state.allUnchecked}
					viewAll={this.state.viewAll}
					viewToDo={this.state.viewToDo}
					viewCompleted={this.state.viewCompleted} />
				<Options
					itemCount={this.state.numberToDo}
					checkAll={this.checkAll.bind(this)}
					uncheckAll={this.uncheckAll.bind(this)}
					viewAll={this.viewAll.bind(this)}
					viewToDo={this.viewToDo.bind(this)}
					viewCompleted={this.viewCompleted.bind(this)}
					deleteCompleted={this.deleteCompleted.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));