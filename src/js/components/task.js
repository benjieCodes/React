import React from 'react';

class Task extends React.Component {

  constructor () {
    super();
    this.state = { complete: false };
  }

  toggleComplete () {
    if (this.state.complete) {
      this.setState({complete: false });
    } else {
      this.setState({complete: true });
    }

  }


  render () {
    return (
      <li
          className={ this.state.complete ? 'complete' : '' }
          onClick={this.toggleComplete.bind(this) }>
            { this.props.task.name }
      </li>
    );
  }
}
export { Task };
