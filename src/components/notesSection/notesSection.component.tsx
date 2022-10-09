import React, {useRef, useState} from 'react';
import {NotesContainer} from './notesSecton.styles';

const NotesSection = () =>{
  const [note,setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () =>{
      if(refInput.current !== null){
        setNote(refInput.current.value);
      }
  }
    return(
      <NotesContainer>
          <label>
              <span>备注</span>
              <input type="text" placeholder="在这里添加备注"
                ref={refInput}
                defaultValue={note}
                onBlur={onBlur}
              />
          </label>
      </NotesContainer>
    )
}

export default NotesSection