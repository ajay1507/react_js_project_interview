import React from 'react';

class BuggyComponent extends React.Component {
  componentDidMount() {
    // This will throw an error when the component mounts
    throw new Error('I crashed!');
  }

  render() {
    return <h2>Buggy Component</h2>;
  }
}

export default BuggyComponent;
