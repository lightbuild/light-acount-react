import React, {useState} from 'react';
import {TagsContainer} from './tagsSection.styles';

const TagsSection:React.FC = () =>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTags,setSelectedTags] = useState<string[]>([])

  const onAddTag = () =>{
    const tagName = window.prompt('请输入新增标签名')
    if(tagName !== null){
      setTags([...tags,tagName]);
    }
  }

  const onToggleTag =(tag:string) =>{
    const index = selectedTags.indexOf(tag);
    if(index >= 0){
      //如果tag已经被选中，就将它从列表中踢出去
      setSelectedTags(selectedTags.filter(t=>t!==tag));
    }else{
      setSelectedTags([...selectedTags,tag])
    }
  }
  const getClassName = (tag:string) => selectedTags.indexOf(tag) >= 0 ? 'selected':''

    return (
      <TagsContainer>
        <ol>
          {tags.map(tag =>
            <li
              onClick={() =>{
                  onToggleTag(tag)
              }}
              className={getClassName(tag)}
              key={tag}>
              {tag}
            </li>
          )}
        </ol>
        <button onClick={onAddTag}>新增标签</button>
      </TagsContainer>
    )
}

export default TagsSection;