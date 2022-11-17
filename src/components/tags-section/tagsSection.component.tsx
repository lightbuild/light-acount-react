import React from 'react';
import {TagsContainer} from './tagsSection.styles';

import {useSelector, useDispatch} from 'react-redux';
import {
  addItemToTags,
} from '../../store/tags/tags.action';

import {selectorTagsItems} from '../../store/tags/tags.selector';


type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const tags = useSelector(selectorTagsItems);
  const selectedTagIds = props.value;

  const onAddTag = () => dispatch(addItemToTags(tags));

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      //如果tag已经被选中，就将它从列表中踢出去
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClassName = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';

  return (
    <TagsContainer>
      <ol>
        {tags.map(tag =>
          <li
            onClick={() => {
              onToggleTag(tag.id);
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
  );
};

export default TagsSection;