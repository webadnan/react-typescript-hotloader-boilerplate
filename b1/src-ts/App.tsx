import * as React from 'react';
import '../static/styles.scss';
import TestComponent from './test-component/index'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <TestComponent />
      </div>
    );
  }
}
