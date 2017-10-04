import React from 'react';

const Options = (props) => {
	return(
		<div className="panel-footer">
			<div className="row">
				<div className="col-md-3 text-left">
					<a onClick={props.checkAll}>Check all</a> | <a onClick={props.uncheckAll}>Uncheck all</a>
				</div>
				<div className="col-md-3 text-center">
					View:
					<a onClick={props.viewAll}> All</a> | 
					<a onClick={props.viewToDo}> To Do</a> | 
					<a onClick={props.viewCompleted}> Completed</a>
				</div>
				<div className="col-md-3 text-center" >
					Left to do: {props.itemCount}
				</div>
				<div className="col-md-3 text-right">
					<a onClick={props.deleteCompleted}>Delete completed</a>
				</div>
			</div>
		</div>
	);
}

// class Options extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return(
// 			<div className="panel-footer">
// 				<div className="row">
// 					<div className="col-md-3 text-left">
// 						<a onClick={this.props.checkAll}>Check all</a> | <a onClick={this.props.uncheckAll}>Uncheck all</a>
// 					</div>
// 					<div className="col-md-3 text-center">
// 						View:
// 						<a onClick={this.props.viewAll}> All</a> | 
// 						<a onClick={this.props.viewToDo}> To Do</a> | 
// 						<a onClick={this.props.viewCompleted}> Completed</a>
// 					</div>
// 					<div className="col-md-3 text-center" >
// 						Left to do: {this.props.itemCount}
// 					</div>
// 					<div className="col-md-3 text-right">
// 						<a>Delete completed</a>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default Options;