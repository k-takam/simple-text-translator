import React, { Component } from 'react';

export default class OutputText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column is-half">
        <span className="label">英語</span>
        <div className="textarea">{this.props.outputText}</div>
      </div>
    );
  }
}

OutputText.propTypes = {
  outputText: React.PropTypes.string
};
