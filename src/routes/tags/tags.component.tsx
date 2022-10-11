import React from 'react'
import {useTags} from '../../utils/useTags';

const Tags =() =>{
  const {tags,setTags} = useTags();
  return(
    <div>
    <ol>
      {tags.map(tag =>
        <li key={tag}>{tag}</li>
      )}
    </ol>
    </div>
  )
}

export default Tags