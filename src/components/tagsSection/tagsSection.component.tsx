import React, {useState} from 'react';
import {TagsContainer} from './tagsSection.styles';


type Props = {
  value:string[];
  onChange:(selected:string[])=>void;
};

const TagsSection:React.FC<Props> = (props) =>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])

  const selectedTags = props.value

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
      props.onChange(selectedTags.filter(t=>t!==tag));
    }else{
      props.onChange([...selectedTags,tag])
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