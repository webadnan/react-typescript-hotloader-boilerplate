import * as React from 'react';

export default class JustTable extends React.Component {
  render() {
    var data = [
      "SM Adnan",
      "Arif",
      "Ahsan"
    ];
    var dataHtml = data.map(e => <p>{e}</p>);
    return (
      <div className={"red"}>
        {dataHtml}
      </div>
    );
  }
}
