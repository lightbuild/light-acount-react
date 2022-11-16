import {AnyAction} from 'redux';
import {TagItem} from './tags.type';
import {setTagsItems} from './tags.action'


import {createId} from '../../utils/creatId';


export type TagsState = {
  readonly tagsItems: TagItem[]
}

export const TAGS_INITIAL_STATE: TagsState = {
  tagsItems: [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'},
  ]
};


export const tagsReducer = (
  state = TAGS_INITIAL_STATE,
  action: AnyAction
):TagsState => {
  if (setTagsItems.match(action)){
    return {
      ...state,
      tagsItems:action.payload
    }
  }
  return state
};
