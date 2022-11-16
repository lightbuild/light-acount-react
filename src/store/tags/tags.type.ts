export enum TAGS_ACTION_TYPE  {
  SET_TAGS_ITEM = 'SET_TAGS_ITEM',
}

export type TagItem = {
  id:number;
  name:string;
}

export type TagsItemMap = {
  [key:number]:TagItem
}