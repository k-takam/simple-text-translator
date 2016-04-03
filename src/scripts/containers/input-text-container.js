import React from 'react';
import { connect } from 'react-redux';
import InputText from '../components/input-text';
import { fetchTranslate } from '../actions';

const mapStateToProps = (state) => {
  return {
    inputText: state.inputText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (inputText) => {
      dispatch(fetchTranslate(inputText));
    }
  };
};

const InputTextContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(InputText);

export default InputTextContainer;
