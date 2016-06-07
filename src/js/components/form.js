import React from 'react';


class Form extends React.Component {

  addTask (event) {
    event.preventDefault();
    let name = this.refs.taskInput.value;
    this.props.createTask(name);
    this.refs.taskInput.value = '';
  }

  render () {
    return (
      <form onSubmit={this.addTask.bind(this) }>
        <input type="text" className="coolInput" placeholder="Enter Task" ref="taskInput" />
      </form>
    );
  }

}

export { Form };
