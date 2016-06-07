import React from 'react';

class App extends React.Component {

  sayHi () {
    event.preventDefault();
    alert('Hi.');
  }

  render () {
    return (
      <div className="cool">
        <button onClick={this.sayHi}>
          Click Me
        </button>
      </div>
    );
  }

}

export { App }
