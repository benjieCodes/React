import React from 'react';

import { Task } from './task';

class List extends React.Component {

  renderTasks () {
   let tasks = this.props.tasks;
   return tasks.map( (task) => {
     return <Task task={task} />
   });
  }

  render () {
    return (
      <div className="todo-list">
        <ul>
          { this.renderTasks() }
        </ul>
      </div>
    );

  }


}

export { List }
