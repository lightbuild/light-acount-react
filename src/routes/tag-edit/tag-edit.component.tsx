import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../../utils/useTags';
import {ReactComponent as LeftLogo} from 'assets/icons/left.svg';
import Input from '../../components/input/input.component';

import {Button} from '../../components/button/button.styles';
import {ButtonWrapper, InputWrapper, Topbar} from './tag-edit.styles';



type Params = {
  id: string
}

const TagEdit: React.FC = () => {
  const {findTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id!));

  return (
    <div>
      <Topbar>
        <LeftLogo />
        <span>编辑标签</span>
        <LeftLogo />
      </Topbar>
      <InputWrapper>
        <Input label='标签名' type='text' placeholder='标签名' value={tag.name} />
      </InputWrapper>
      <ButtonWrapper>
        <Button>删除标签</Button>
      </ButtonWrapper>
    </div>
  );
};

export default TagEdit;