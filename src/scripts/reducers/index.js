import { combineReducers } from 'redux';
import text from './text';
import modal from './modal';

const translateApp = combineReducers({
  text,
  modal
});

export default translateApp;
