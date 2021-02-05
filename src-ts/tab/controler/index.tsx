import * as React from 'react';
import TabPage from '../page/index'

class TabControlProps {
  public pages: Array<TabPage>;
}

class TabControlState {
  public index: number;
}

export default class extends React.Component<TabControlProps, TabControlState> {
  constructor(props: TabControlProps) {
    super(props);
    this.state = {
      index: 0
    }
  }

  render() {
    let self = this;
    return (
      <div className="tab-control">
        {self.renderTabHeaders()}
        {self.renderTabContent()}
      </div>
    );
  }

  renderTabHeaders() {
    let self = this;
    let pages = self.props.pages;
    let result = [];
    for (let i=0;i<self.props.pages.length;i++) {
      let cls = (self.state.index == i) ? "heading selected" : "heading";
      result.push(<div 
        className={cls} 
        onClick={() => self.onTabClicked.bind(self)(i)}>
          {pages[i].props.heading}
      </div>)
    }
    return result;
  }

  renderTabContent() {
    let self = this;
    let index = self.state.index;
    return self.props.pages[index];
  }

  onTabClicked(i: number) {
    let self = this;
    self.setState(state => {
      return {
        index: i
      }
    })
  }
}
