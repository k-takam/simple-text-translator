const initialState = {
  isFetching: false,
  inputText: '',
  outputText: ''
};

const text = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TRANSLATE':
      return Object.assign({}, state, {isFetching: true});
    case 'RECEIVE_TRANSLATE':
      return Object.assign({}, state, {isFetching: false, outputText: action.outputText});
    case 'CLEAR_TEXT':
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default text;
