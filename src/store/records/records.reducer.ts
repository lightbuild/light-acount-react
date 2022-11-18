import {AnyAction} from 'redux';
import {setTagsItems} from './records.action';

import {RecordItem} from './records.type';

export type RecordsState = {
  readonly recordsItems: RecordItem[]
}

export const record_initial_state: RecordsState = {
  recordsItems: []
};

export const recordsReducer = (
  state=record_initial_state,
  action: AnyAction
): RecordsState => {
  if (setTagsItems.match(action)) {
    return {
      ...state,
      recordsItems: action.payload
    };
  }
  return state;
};

