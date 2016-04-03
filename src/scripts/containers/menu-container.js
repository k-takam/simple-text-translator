import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu';
import { openModal } from '../actions';

const mapStateToProps = (state) => {
  return {
    outputText: state.text.outputText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (type, modalText) => {
      dispatch(openModal(type, modalText));
    }
  };
};

const MenuContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;
