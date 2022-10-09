import React from 'react'
import {TagsContainer} from './tagsSection.styles';

const TagsSection = () =>{
    return (
      <TagsContainer>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsContainer>
    )
}

export default TagsSection;