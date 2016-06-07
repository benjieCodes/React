import React from 'react';

class Task extends React.Component {

  render () {
    return (
      <li>
        { this.props.task.name }
      </li>
    );
  }
}
export { Task };
