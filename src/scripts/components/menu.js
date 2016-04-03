import React, { Component } from 'react';
import { EventEmitter } from 'events';
import ClipboardAction from '../../../node_modules/clipboard/lib/clipboard-action';
import jsPDF from 'jspdf';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  handleCopyClick(e) {
    e.preventDefault();

    if (this.props.outputText) {
      this.copyText(this.props.outputText);
      this.openModal('success', '翻訳されたテキストをコピーしました。');
    } else {
      this.openModal('warning', 'テキストが入力されていません。');
    }
  }

  handleSaveClick(e) {
    e.preventDefault();
    this.savePDF(this.props.outputText);
  }

  copyText(text, id) {
    const clipboard = new ClipboardAction({
      'text': text,
      'emitter': new EventEmitter()
    });
  }

  savePDF(text) {
    const doc = new jsPDF();
    doc.text(20, 20, text);
    doc.save('Translate.pdf');
  }

  openModal(modalType, modalText) {
    this.props.openModal(modalType, modalText);
  }

  render() {
    return (
      <div className="column is-half">
        <p className="control">
          <a className="button button-copy is-primary" href="" onClick={this.handleCopyClick.bind(this)}>
            <span className="icon">
              <i className="fa fa-clipboard"></i>
            </span>
            <span>クリップボードにコピー</span>
          </a>
          <a className="button is-success" href="" onClick={this.handleSaveClick.bind(this)}>
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

Menu.propTypes = {
  outputText: React.PropTypes.string,
  openModal: React.PropTypes.func
};
