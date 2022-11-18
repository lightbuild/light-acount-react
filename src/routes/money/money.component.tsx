import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addItemToRecords} from '../../store/records/records.action';
import {selectorRecordsItem} from '../../store/records/records.selector';

import {SectionWraaper} from './money.styles';

import TagsSection from '../../components/tags-section/tagsSection.component';
import NotesSection from '../../components/notes-section/notesSection.component';
import CategorySection from '../../components/category-section/categorySection.component';
import NumberPadSection from '../../components/numberPad-section/numberPadSection.component';
import {NewRecordItem} from '../../store/records/records.type';


const Money = () => {
  const dispatch = useDispatch();
  const records = useSelector(selectorRecordsItem);
  const [selected, setSelected] = useState<NewRecordItem>({
    tagIds: [],
    notes: '',
    type: '-',
    amount: 0
  });

  const onCollect = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  const addRecord = () =>{
    dispatch(addItemToRecords(records,selected))
  }


  return (
    <SectionWraaper>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onCollect({amount})}
                        onOk={() =>addRecord()}
      />
      <CategorySection value={selected.type}
                       onChange={(type) => onCollect({type})}
      />
      <NotesSection value={selected.notes}
                    onChange={(notes) => onCollect({notes})}/>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onCollect({tagIds})}/>
    </SectionWraaper>
  );
};

export default Money;