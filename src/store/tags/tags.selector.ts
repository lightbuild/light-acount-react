import {RootSate} from '../store';
import {TagsItemMap} from './tags.type'


export const selectorTagsItems = (state:RootSate) => state.tags.tagsItems

export const selectorTagsItemsMap = (state:RootSate) =>{
  const tagsItems = state.tags.tagsItems
  return tagsItems.reduce((acc,tag)=>{
    const {id} = tag;
    acc[id] = tag;
    return acc
  },{} as TagsItemMap)
}

