import {createAction, withMatcher, ActionWithPayload} from '../../utils/reducer/reuder.utils';
import {TAGS_ACTION_TYPE, TagItem} from './tags.type';

const addTagItem = (
  tagsItems: TagItem[],
  tagToAdd: TagItem
): TagItem[] => {
  const existingTag = tagsItems.find((tag: TagItem) => tag.name === tagToAdd.name);
  if (existingTag) {
    alert('标签名已存在');
    return tagsItems;
  } else {
    return [...tagsItems, tagToAdd];
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
  tagsItems:TagItem[],
  itemToAdd:TagItem
) =>{
  const newTagItems = addTagItem(tagsItems,itemToAdd)
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

