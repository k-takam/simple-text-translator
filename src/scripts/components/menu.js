import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className="column is-half">
        <p className="control">
          <a className="button is-primary" href="">
            <span className="icon">
              <i className="fa fa-clipboard"></i>
            </span>
            <span>クリップボードにコピー</span>
          </a>
          <a className="button is-success" href="">
            <span className="icon">
              <i className="fa fa-file-pdf-o"></i>
            </span>
            <span>PDFを作成</span>
          </a>
        </p>
      </div>
    );
  }
}
