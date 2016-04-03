import React, { Component } from 'react';

export default class OutputText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let isFetching = (this.props.isFetching) ? 'is-fetching' : '';

    return (
      <div className="column is-half">
        <span className="label">英語</span>
        <div className={`textarea output-area ${isFetching}`}>{this.props.outputText}</div>
      </div>
    );
  }
}

OutputText.propTypes = {
  isFetching: React.PropTypes.boolean,
  outputText: React.PropTypes.string
};
