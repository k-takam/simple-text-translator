import React from 'react';
import { connect } from 'react-redux';
import Menu from '../components/menu';
import { copyToClipboard, createPDF } from '../actions';

const mapStateToProps = (state) => {
  return {
    inputText: state.inputText,
    outputText: state.outputText
  };
};

const MenuContainer =  connect(
  mapStateToProps
)(Menu);

export default MenuContainer;
