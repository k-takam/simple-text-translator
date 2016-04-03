import React from 'react';
import { connect } from 'react-redux';
import Modal from '../components/modal';
import { closeModal } from '../actions';

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.isOpen,
    modalType: state.modal.modalType,
    modalText: state.modal.modalText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(closeModal());
    }
  };
};

const ModalContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export default ModalContainer;
