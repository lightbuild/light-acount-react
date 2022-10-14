import React, {ChangeEventHandler} from 'react';
import {NotesContainer} from './notesSecton.styles';
import Input from '../input/input.component';


type Props = {
  value:string;
  onChange:(value:string)=>void
}

const NotesSection:React.FC<Props> = (props) =>{
  const note = props.value;

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };

    return(
      <NotesContainer>
        <Input label="备注" type="text" value={note} onChange={onChange}
               placeholder="请填写备注"/>
      </NotesContainer>
    )
}

export default NotesSection