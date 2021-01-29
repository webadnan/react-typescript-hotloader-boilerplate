import * as React from 'react';
import '../static/styles.scss';
import JustTable from './JustTable'
import TestComponent from './test-component/index'
import TableRow from './table-row/index'

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.renderTableRow(3)}
        <JustTable />
        <h1>Hello, world 5.</h1>
        {this.renderTableRow(6)}
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
}

/*
  <JustTable />
  <TestComponent />
*/
