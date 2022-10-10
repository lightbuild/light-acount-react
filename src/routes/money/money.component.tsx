import React, { useState } from 'react';

import {SectionWraaper} from './money.styles';

import TagsSection from '../../components/tagsSection/tagsSection.component';
import NotesSection from '../../components/notesSection/notesSection.component';
import CategorySection from '../../components/categorySection/categorySection.component';
import NumberPadSection from '../../components/numberPadSection/numberPadSection.component';

type Category= '-'|'+'

const Money = () => {
  const [selected,setSelectedTags] = useState({
    tags:[] as string[],
    note:'',
    category:'-' as Category,
    amount:0
  })
  return (
    <SectionWraaper>
      <NumberPadSection value={selected.amount}
                        onChange={(amount:number)=>setSelectedTags({
                          ...selected,
                          amount: amount
                        })}
                        onOk={()=>{}}
      />
      <CategorySection value={selected.category}
                       onChange={(category:Category)=>setSelectedTags({
                         ...selected,
                         category: category
                       })}
      />
      <NotesSection value={selected.note}
                    onChange={(note) =>setSelectedTags({
                      ...selected,
                      note: note
                    })
                    }/>
      <TagsSection value={selected.tags}
                   onChange={(tags) =>setSelectedTags({
                     ...selected,
                     tags: tags
                   })
      }/>
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