import {ChangeEvent,FC} from 'react';
import {NotesContainer} from './notesSecton.styles';
import Input from '../input/input.component';


type NoteProps = {
  value:string;
  onChange:(value:string)=>void
}

const NotesSection:FC<NoteProps> = (props) =>{
  const note = props.value;

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
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