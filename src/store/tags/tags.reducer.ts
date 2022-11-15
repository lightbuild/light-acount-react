import {AnyAction} from 'redux';
import {TagItem} from './tags.type';

// import {setTagsItems} from './tags.action';
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
  const {type,payload} = action;
  switch (type) {
    case TAGS_INITIAL_STATE.tagsItems:
      return{
        ...state,
        ...payload
      }
    default:
      //从这里就能看出，ts确实没有办法判断这个返回错误了，所以需要withWatch函数
      return state;
  }
};
