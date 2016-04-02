const initialState = {
  inputText: '',
  outputText: ''
};

const text = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        inputText: action.inputText,
        outputText: action.inputText
      };
    default:
      return state;
  }
};

export default text;
