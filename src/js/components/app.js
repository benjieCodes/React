import React from 'react';

import { Form } from './form';

class App extends React.Component {

  sayHi () {
    event.preventDefault();
  }

  render () {
    return (
      <div className="todo-app">
      <h2> Benjie's Todo List </h2>
        <Form />
      </div>
    );
  }

}

export { App }
