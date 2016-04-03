import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    let isOpen = (this.props.isOpen) ? 'is-active' : '';

    return (
      <div className={`modal ${isOpen}`}>
        <div className="modal-background" onClick={this.handleClick.bind(this)}></div>
        <div className="modal-container">
          <div className="modal-content">
            <div className={`notification is-${this.props.modalType}`}>{this.props.modalText}</div>
          </div>
        </div>
        <button className="modal-close" onClick={this.handleClick.bind(this)}></button>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: React.PropTypes.boolean,
  modalType: React.PropTypes.string,
  modalText: React.PropTypes.string,
  closeModal: React.PropTypes.func
};
