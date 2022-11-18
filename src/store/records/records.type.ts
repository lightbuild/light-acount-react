export enum Records_Action_Type  {
  set_records_item = 'set_records_item',
}

export type RecordItem = {
  tagIds: number[],
  notes: string,
  type: '-'|'+',
  amount: number,
  createdAt?: string
}

export type NewRecordItem = Omit<RecordItem,'createdAt'>