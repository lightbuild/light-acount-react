import React from 'react';
import {TagsContainer} from './tagsSection.styles';

import {useSelector} from 'react-redux'
import {selectorTagsItems} from '../../store/tags/tags.selector'
import {useTags} from '../../utils/useTags';
import {createId} from '../../utils/creatId';



type Props = {
  value:number[];
  onChange:(selected:number[])=>void;
};

const TagsSection:React.FC<Props> = (props) =>{
  // const {tags,setTags} = useTags()
  const tags = useSelector(selectorTagsItems)
  const selectedTagIds = props.value

  const onAddTag = () =>{
    const tagName = window.prompt('请输入新增标签名')
    // if(tagName !== null){
    //   setTags([...tags,{id:createId(),name:tagName}]);
    // }
    console.log(tagName);
  }

  const onToggleTag =(tagId:number) =>{
    const index = selectedTagIds.indexOf(tagId);
    if(index >= 0){
      //如果tag已经被选中，就将它从列表中踢出去
      props.onChange(selectedTagIds.filter(t=>t!==tagId));
    }else{
      props.onChange([...selectedTagIds,tagId])
    }
  }
  const getClassName = (tagId:number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected':''

    return (
      <TagsContainer>
        <ol>
          {tags.map(tag =>
            <li
              onClick={() =>{
                  onToggleTag(tag.id)
              }}
              className={getClassName(tag.id)}
              key={tag.name}>
              {tag.id}
              {tag.name}
            </li>
          )}
        </ol>
        <button onClick={onAddTag}>新增标签</button>
      </TagsContainer>
    )
}

export default TagsSection;