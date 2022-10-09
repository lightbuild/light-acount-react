import React from 'react';
import {CategoryContainer} from './categorySection.styles';

const CategorySection = () =>{
  return(
    <CategoryContainer>
      <ul>
        <li className='selected'>支出</li>
        <li>收入</li>
      </ul>
    </CategoryContainer>
  )
}

export default CategorySection;