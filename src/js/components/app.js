import React from 'react';

import { Form } from './form';
import { List } from './list';

const my_todos = [
  { name: 'Buy milk', completed: false },
  { name: 'Sell cat', completed: false },
  { name: 'Buy boat', completed: true }
];

class App extends React.Component {

  constructor () {
    super();
    this.state = { todos: my_todos };
  }

  addTaskItem (taskItem) {
    let newTask = { name: taskItem, completed: false };
    this.state.todos.push(newTask);
    this.setState({ todos: this.state.todos });
  }

  render () {
    return (
      <div className="todo-app">
      <h2> Benjie's Todo List </h2>
        <Form createTask= {this.addTaskItem.bind(this)}/>
        <hr />
        <List tasks={this.state.todos}/>
      </div>
    );
  }

}

export { App }
