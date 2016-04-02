import React from 'react';
import { connect } from 'react-redux';
import InputText from '../components/input-text';
import { changeText } from '../actions';

const mapStateToProps = (state) => {
  return {
    inputText: state.inputText,
    outputText: state.outputText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (inputText) => {
      dispatch(changeText(inputText));
    }
  };
};

const InputTextContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(InputText);

export default InputTextContainer;
