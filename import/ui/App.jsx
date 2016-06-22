import React, {Component} from 'react';

import Task from './Task/Task.jsx';

export default class App extends Component {

	getTasks() {
		return [
			{_id: 1, task: 'This is task 1.'},
			{_id: 2, task: 'This is task 2.'},
			{_id: 3, task: 'This is task 3.'}
		];
	}

	renderTask() {
		return this.getTasks().map(task => {
			return (<Task key={task._id} task={task}/>);
		});
	}

	render() {
		return (
		  <div className="container">
			  <header>
				  <h1>To Do List</h1>
			  </header>

			  <ul>
				  {this.renderTask()}
			  </ul>
		  </div>
		);
	}
}
