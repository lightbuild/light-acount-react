import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../../utils/useTags';

type Params = {
  id: string
}

const TagEdit: React.FC = () => {
  const {findTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id!));

  return (
    <div>{tag.name}</div>
  );
};

export default TagEdit;