export enum Tags_Action_Type  {
  set_tags_item = 'set_tags_item',
}

export type TagItem = {
  id:number;
  name:string;
}

export type TagsItemMap = {
  [key:number]:TagItem
}