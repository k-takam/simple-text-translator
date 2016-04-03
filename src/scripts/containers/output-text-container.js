import React from 'react';
import { connect } from 'react-redux';
import OutputText from '../components/output-text';

const mapStateToProps = (state) => {
  return {
    isFetching: state.text.isFetching,
    outputText: state.text.outputText
  };
};

const OutputTextContainer =  connect(
  mapStateToProps
)(OutputText);

export default OutputTextContainer;
