import {combineReducers} from 'redux'

import {tagsReducer} from './tags/tags.reducer'
import {recordsReducer} from './records/records.reducer';

export const rootReducer = combineReducers({
  tags:tagsReducer,
  records:recordsReducer,
})

