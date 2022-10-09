import React, {useState} from 'react';
import {CategoryContainer} from './categorySection.styles';

const CategorySection = () =>{
  const categoryMap = {"-":"支出","+":"收入"}
  const [categoryList] = useState<('-'|'+')[]>(['-','+']);
  const [category,setCategory] = useState('-');

  return(
    <CategoryContainer>
      <ul>
        {categoryList.map(item =>
          <li key={item}
            onClick={() =>{setCategory(item)}}
            className={category===item ?'selected':''}
          >{categoryMap[item]}</li>
        )}
      </ul>
    </CategoryContainer>
  )
}

export default CategorySection;