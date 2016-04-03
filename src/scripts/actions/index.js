import request from 'superagent';

export const requestTranslate = (inputText) => {
  return {
    type: 'REQUEST_TRANSLATE',
    inputText
  };
};

export const receiveTranslate = (inputText, json) => {
  return {
    type: 'RECEIVE_TRANSLATE',
    inputText,
    outputText: json.translate
  };
};

export const clearText = () => {
  return {
    type: 'CLEAR_TEXT'
  };
};

export const fetchTranslate = (inputText) => {
  return (dispatch) => {
    if (inputText) {
      dispatch(requestTranslate(inputText));
      return request
        .get(`http://translateapi.azurewebsites.net/api/${inputText}`)
        .end((err, res) => {
          if (err) console.log(err);
          dispatch(receiveTranslate(inputText, res.body));
        });
    } else {
      dispatch(clearText());
    }
  };
};
