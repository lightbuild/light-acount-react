import {ChangeEvent, FC, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import {selectorTagsItemsMap, selectorTagsItems} from '../../store/tags/tags.selector';
import {updateItemFromTags, removeItemFromTags} from '../../store/tags/tags.action';

import {ReactComponent as LeftLogo} from 'assets/icons/left.svg';
import Input from '../../components/input/input.component';

import {Button} from '../../components/button/button.styles';
import {ButtonWrapper, InputWrapper, Topbar} from './tag-edit.styles';


type TagRouteParams = {
  id: string
}

const TagEdit: FC = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const tags = useSelector(selectorTagsItems);
  const tagsMap = useSelector(selectorTagsItemsMap);
  const {id} = useParams<keyof TagRouteParams>() as TagRouteParams;

  const tag = tagsMap[parseInt(id)];

  const [tagName, setTagName] = useState(tag.name);

  const goBack =() =>{
    navigation('/tags');
  }

  const removeTag = () => {
    dispatch(removeItemFromTags(tags, tag));
    goBack()
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setTagName(value);
    dispatch(updateItemFromTags(tags, {id: parseInt(id), name: value}));
  };

  return (
    <div>
      <Topbar>
        <LeftLogo onClick={goBack}/>
        <span>编辑标签</span>
        <LeftLogo/>
      </Topbar>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名" value={tagName} onChange={handleChange}/>
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={removeTag}>删除标签</Button>
      </ButtonWrapper>
    </div>
  );
};

export default TagEdit;