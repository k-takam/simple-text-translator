import React, { Component } from 'react';

export default class InputText extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="column is-half">
        <label className="label">日本語</label>
        <textarea className="textarea" placeholder="翻訳したい文章を入力してください。" onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

InputText.propTypes = {
  onChange: React.PropTypes.func
};
