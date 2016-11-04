import { combineReducers } from 'redux';

import counter from './counter';
import messages from './messages';
import countries from './countries';

export default combineReducers({ counter, messages, countries });
