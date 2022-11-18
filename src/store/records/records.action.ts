import {ActionWithPayload, createAction, withMatcher} from '../../utils/reducer/reuder.utils';
import {NewRecordItem, RecordItem, Records_Action_Type} from './records.type';


const addRecord = (
  recordsItems: RecordItem[],
  newRecord: NewRecordItem
):RecordItem[] => {
  if (newRecord.amount<= 0){
    alert('请输入金额');
    return recordsItems
  }
  if (newRecord.tagIds.length===0){
    alert('请选择标签')
    return recordsItems
  }else{
    return [...recordsItems,{...newRecord,createdAt:(new Date()).toISOString()}]
  }
};

export type SetRecordsItems = ActionWithPayload<Records_Action_Type.set_records_item, RecordItem[]>

export const setTagsItems = withMatcher((records: RecordItem[]):SetRecordsItems =>
  createAction(Records_Action_Type.set_records_item, records));

export const addItemToRecords = (
  recordsItems: RecordItem[],
  newRecord: NewRecordItem
)=>{
  const newRecords = addRecord(recordsItems,newRecord);
  return setTagsItems(newRecords)
}