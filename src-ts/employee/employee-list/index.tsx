import { Server } from 'http';
import { divide } from 'lodash';
import * as React from 'react';
import TabPage, { TabPageProps, TabPageState } from '../../tab/page/index'
import Api from '../../backend/Api'

export default class EmployeeTabPage extends TabPage {
  constructor(props: TabPageProps) {
    super(props);
    let self = this;

    console.log("EmployeeTabPage is created")
    self.state = {
      data: []
    }
  }

  componentDidMount() {
    let self = this;
    if (self.state.data == null || self.state.data.length == 0) {
      Api.getEmployeeData().then(empList => {
        self.setState(state => {
          return {
            data: empList
          }
        })
      })
    }
  }

  componentWillUnmount() {
    console.log("EmployeeTabPage is destroyed");
  }
  
  render() {
    let self = this;
    return (
      <div className="tab-page">
        {self.props.text}<br />
        <div>
          This is a detailed employee page
          <h1>Heading 1</h1>
          <h3>heading 3</h3>
          <h1>Heading 1</h1>
          <h3>heading 3</h3>
          <h1>Heading 1</h1>
          <h3>Employee list</h3>
          {self.state.data.map(e => <div>{JSON.stringify(e)}</div>)}
        </div>
      </div>
    );
  }
}
