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

  render () {
    return (
      <div className="todo-app">
      <h2> Benjie's Todo List </h2>
        <Form />
        <hr />
        <List tasks={this.state.todos}/>
      </div>
    );
  }

}

export { App }
