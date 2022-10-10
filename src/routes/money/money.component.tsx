import React, { useState } from 'react';

import {SectionWraaper} from './money.styles';

import TagsSection from '../../components/tagsSection/tagsSection.component';
import NotesSection from '../../components/notesSection/notesSection.component';
import CategorySection from '../../components/categorySection/categorySection.component';
import NumberPadSection from '../../components/numberPadSection/numberPadSection.component';

type Category= '-'|'+'

const Money = () => {
  const [selected,setSelected] = useState({
    tags:[] as string[],
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
      <TagsSection value={selected.tags}
                   onChange={(tags) => onChange({tags})}/>
      {selected.tags.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}
    </SectionWraaper>
  );
}

export default Money;