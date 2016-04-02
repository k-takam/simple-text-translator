import React, { Component } from 'react';
import debounce from 'lodash.debounce';

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.callChange = debounce(this.callChange, 1000);
  }

  handleChange(e) {
    this.callChange(e.target.value);
  }

  callChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="column is-half">
        <label className="label">日本語</label>
        <textarea className="textarea" placeholder="翻訳したい文章を入力してください。"
         onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

InputText.propTypes = {
  onChange: React.PropTypes.func
};
