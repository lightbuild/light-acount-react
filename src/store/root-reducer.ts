import {combineReducers} from 'redux'

import {tagsReducer} from './tags/tags.reducer'

export const rootReducer = combineReducers({
  tags:tagsReducer
})

