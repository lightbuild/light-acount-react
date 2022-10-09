import React from 'react';

import {SectionWraaper} from './money.styles';

import TagsSection from '../../components/tagsSection/tagsSection.component';
import NotesSection from '../../components/notesSection/notesSection.component';
import CategorySection from '../../components/categorySection/categorySection.component';
import NumberPadSection from '../../components/numberPadSection/numberPadSection.component';


const Money = () => {
  return (
    <SectionWraaper>
      <NumberPadSection/>
      <CategorySection/>
      <NotesSection/>
      <TagsSection/>
    </SectionWraaper>
  );
}

export default Money;