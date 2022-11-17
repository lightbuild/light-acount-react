import {useSelector,useDispatch} from 'react-redux'
import {selectorTagsItems} from '../../store/tags/tags.selector';
import {addItemToTags} from '../../store/tags/tags.action'

import {TagList, Button, Center} from './tags-preview.styles';
import {ReactComponent as RightLogo} from 'assets/icons/right.svg';
import {Link} from 'react-router-dom';

const TagsPreview = () => {
  const dispatch = useDispatch()
  const tags = useSelector(selectorTagsItems)
  const onAddTag = () => dispatch(addItemToTags(tags));

  return (
    <div>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={tag.id.toString()}>
              <span className="oneLine">{tag.name}</span>
              <RightLogo/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Button onClick ={onAddTag}>
          新增标签
        </Button>
      </Center>
    </div>
  );
};

export default TagsPreview;