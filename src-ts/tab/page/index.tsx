import * as React from 'react';

export class TabPageProps {
  public heading: string;
  public text: string;
}

export class TabPageState {
  public data: any;
}

export default class TabPage extends React.Component<TabPageProps, TabPageState> {
  render() {
    return (
      <div className="tab-page">
        {this.props.text}
      </div>
    );
  }
}

export class InfoTabPage extends TabPage {
  render() {
    return (
      <div className="tab-page">
        {this.props.text}<br />
        <div>
          Here is my custom div
          <h1>Heading 1</h1>
          <h3>heading 3</h3>
        </div>
      </div>
    );
  }
}
