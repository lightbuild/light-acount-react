import {createAction, withMatcher, ActionWithPayload} from '../../utils/reducer/reuder.utils';
import {TAGS_ACTION_TYPE, TagItem} from './tags.type';
import {createId} from '../../utils/creatId';

const addTagItem = (
  tagsItems: TagItem[],
): TagItem[] => {
  const tagName = window.prompt('请输入新增标签名');
  if (tagName ==='' || tagName === null ) {
    alert('标签名不能为空');
    return tagsItems
  }else if (tagsItems.find((tag: TagItem) => tag.name === tagName)) {
    alert('标签名已存在');
    return tagsItems;
  } else {
    return [...tagsItems, {id:createId(),name:tagName}];
  }
};

const removeTagItem = (
  tagsItems: TagItem[],
  tagToRemove: TagItem
): TagItem[] => {
  return tagsItems.filter((tag: TagItem) => tag.id !== tagToRemove.id);
};

const updateTagItem = (
  tagsItems: TagItem[],
  tagToUpdate: TagItem
): TagItem[] => {
  return tagsItems.map((tag) =>
    tag.id === tagToUpdate.id
      ? {...tag, name: tagToUpdate.name}
      : tag
  );
};

export type SetTagsItems = ActionWithPayload<TAGS_ACTION_TYPE.SET_TAGS_ITEM, TagItem[]>

export const setTagsItems = withMatcher((tags: TagItem[]):SetTagsItems =>
  createAction(TAGS_ACTION_TYPE.SET_TAGS_ITEM, tags));

export const addItemToTags =(
  tagsItems:TagItem[]
) =>{
  const newTagItems = addTagItem(tagsItems)
  return setTagsItems(newTagItems)
}

export const removeItemFromTags =(
  tagsItems:TagItem[],
  itemToRemove:TagItem
  )=>{
  const newTagItems = removeTagItem(tagsItems,itemToRemove)
  return setTagsItems(newTagItems)
}

export const updateItemFromTags= (
  tagsItems:TagItem[],
  itemToUpdate:TagItem
)=>{
  const newTagItems = updateTagItem(tagsItems,itemToUpdate)
  return setTagsItems(newTagItems)
}

