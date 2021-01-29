import { stat } from 'fs';
import * as React from 'react';

class TableRowProps {
  public column: number;
}

class TableRowState {
  public counter: number;
}

export default class extends React.Component<TableRowProps, TableRowState> {
  constructor(props: TableRowProps) {
    super(props);
    let self = this;
    this.state = {
      counter: props.column + 1
    }
  }

  render() {
    let self = this;
    return (
      <div className="table-row">
        <span>{this.props.column}</span>
        {self.renderTexts()}
        <input type="button" value="Less" onClick={self.onLess.bind(self)}/>
        &nbsp;<span>{self.state.counter}</span>&nbsp;
        <input type="button" value="More" onClick={self.onMore.bind(self)}/>
      </div>
    );
  }

  renderTexts()  {
    let texts = [];
    for (let i=0;i<this.props.column;i++) {
      texts.push(<input type="text" />);
    }
    return texts;
  }

  onLess() {
    this.setState(state => {
      let newState = new TableRowState();
      newState.counter = state.counter - 1;
      return newState;
    })
  }

  onMore() {
    this.setState(state => {
      let newState = new TableRowState();
      newState.counter = state.counter + 1;
      return newState;
    })
  }
}
