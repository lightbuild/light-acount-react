import {useTags} from '../../utils/useTags';
import {TagList, Button, Center} from './tags-preview.styles';
import {ReactComponent as RightLogo} from 'assets/icons/right.svg';
import {Link} from 'react-router-dom';

const TagsPreview = () => {
  const {tags} = useTags();
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
        <Button>
          新增标签
        </Button>
      </Center>
    </div>
  );
};

export default TagsPreview;