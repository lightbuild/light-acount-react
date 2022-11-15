import {createAction} from '../../utils/reducer/reuder.utils';
import {TAGS_ACTION_TYPE,TagItem} from './tags.type'

export const setTagsItems = (tags:TagItem[])=>
  createAction(TAGS_ACTION_TYPE.SET_TAGS_ITEM,tags)

