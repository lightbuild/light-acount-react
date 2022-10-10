import React, {useRef} from 'react';
import {NotesContainer} from './notesSecton.styles';
type Props = {
  value:string;
  onChange:(value:string)=>void
}

const NotesSection:React.FC<Props> = (props) =>{
  const note = props.value;
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () =>{
      if(refInput.current !== null){
        props.onChange(refInput.current.value);
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