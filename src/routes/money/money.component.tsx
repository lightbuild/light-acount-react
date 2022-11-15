import React, { useState } from 'react';

import {SectionWraaper} from './money.styles';

import TagsSection from '../../components/tags-section/tagsSection.component';
import NotesSection from '../../components/notes-section/notesSection.component';
import CategorySection from '../../components/category-section/categorySection.component';
import NumberPadSection from '../../components/numberPad-section/numberPadSection.component';

type Category= '-'|'+'

const Money = () => {
  const [selected,setSelected] = useState({
    tagIds:[] as number[] ,
    note:'',
    category:'-' as Category,
    amount:0
  })

  const onChange= (obj:Partial<typeof selected>) =>{
      setSelected({
        ...selected,
        ...obj
      })
  }

  return (
    <SectionWraaper>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
                        onOk={()=>{}}
      />
      <CategorySection value={selected.category}
                       onChange={(category) => onChange({category})}
      />
      <NotesSection value={selected.note}
                    onChange={(note) => onChange({note})}/>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}/>
    </SectionWraaper>
  );
}

export default Money;