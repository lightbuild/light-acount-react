import React from 'react';
import {useTags} from '../../utils/useTags';
import {TagList, Button, Center} from './tags.styles';
import {ReactComponent as RightLogo} from 'assets/icons/right.svg';

const Tags = () => {
  const {tags, setTags} = useTags();
  return (
    <div>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <RightLogo/>
          </li>
        )}
      </TagList>
      <Center>
        <Button>
          新增标签
        </Button>
      </Center>
    </div>
  );
};

export default Tags;