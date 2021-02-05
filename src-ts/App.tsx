import * as React from 'react';
import '../static/styles.scss';
import JustTable from './JustTable'
import TestComponent from './test-component/index'
import TableRow from './table-row/index'
import TabPage, { InfoTabPage } from './tab/page/index'
import TabControl from './tab/controler/index'
import EmployeeTabPage from './employee/employee-list/index'

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.renderTableRow(3)}
        <JustTable />
        <h1>Hello, world 5.</h1>
        {this.renderTableRow(6)}
        {this.renderTab()}
      </div>
    );
  }

  renderTableRow(rows) {
    let table = [];
    for (let i=0;i<rows;i++) {
      table.push(<TableRow column={i}/>);
    }
    return table;
  }

  renderTab() {
    let pages = [];
    pages.push(<TabPage heading={"Info of Kibs"} text={"Some contents Kibs"} />);
    pages.push(<EmployeeTabPage heading={"Employee List"} text={"Employee content"} />);
    pages.push(<TabPage heading={"Settings"} text={"Some contents about settings"} />);
    pages.push(<InfoTabPage heading={"Info SubPage"} text={"Some contents about settings"} />);

    return <TabControl pages={pages} />
  }
}

/*
  <JustTable />
  <TestComponent />
*/
