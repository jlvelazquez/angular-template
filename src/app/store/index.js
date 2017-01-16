import { combineReducers } from 'redux';

import counter from './counter';
import messages from './messages';
import countries from './countries';
import errors from './errors';

export default combineReducers({
  counter,
  messages,
  countries,
  errors
});
