import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu';
import { copyToClipboard } from '../actions';
import { createPDF } from '../actions';

const mapStateToProps = (state) => {
  return {
    inputText: state.inputText,
    outputText: state.outputText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCopyClick: () => {
      dispatch(copyToClipboard());
    },

    onSaveClick: () => {
      dispatch(createPDF());
    }
  };
};

const MenuContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;
