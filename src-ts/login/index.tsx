import * as React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="login">
        <span>Username:</span>
        <input type="text" placeholder="Username" />
        <br/>
        <span>Password:</span>
        <input type="text" placeholder="Password" />
        <br/>
        <input type="button" value="Login" />
      </div>
    );
  }
}
