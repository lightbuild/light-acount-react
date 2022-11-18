import React, {useState} from 'react';
import {CategoryContainer} from './categorySection.styles';
type Props = {
  value:'-'|'+',
  onChange:(value:'-'|'+')=>void
}

const CategorySection:React.FC<Props> = (props) =>{
  const typeMap = {"-":"支出","+":"收入"}
  const [typeList] = useState<('-'|'+')[]>(['-','+']);
  const type= props.value

  return(
    <CategoryContainer>
      <ul>
        {typeList.map(item =>
          <li key={item}
            onClick={() =>{props.onChange(item)}}
            className={type===item ?'selected':''}
          >{typeMap[item]}</li>
        )}
      </ul>
    </CategoryContainer>
  )
}

export default CategorySection;