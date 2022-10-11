import React, {useState} from 'react';
import {CategoryContainer} from './categorySection.styles';
type Props = {
  value:'-'|'+',
  onChange:(value:'-'|'+')=>void
}

const CategorySection:React.FC<Props> = (props) =>{
  const categoryMap = {"-":"支出","+":"收入"}
  const [categoryList] = useState<('-'|'+')[]>(['-','+']);
  const category= props.value

  return(
    <CategoryContainer>
      <ul>
        {categoryList.map(item =>
          <li key={item}
            onClick={() =>{props.onChange(item)}}
            className={category===item ?'selected':''}
          >{categoryMap[item]}</li>
        )}
      </ul>
    </CategoryContainer>
  )
}

export default CategorySection;