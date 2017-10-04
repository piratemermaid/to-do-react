import React, { Component } from 'react';
// import Checkbox from './checkbox';
// import EditBtn from './edit_btn';
// import DeleteBtn from './delete_btn';

const ToDoListItem = (item, key, checked, props) => {
	if(props.editing === true) {
		return(
			EDITING
		);
	}
	else {
		return(
			NOT EDITING
		);
	}
	// return (
	// 	{item.name}
	// );
};

export default ToDoListItem;