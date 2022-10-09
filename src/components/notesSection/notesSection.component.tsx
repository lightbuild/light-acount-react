import React from 'react'
import {NotesContainer} from './notesSecton.styles';

const NotesSection = () =>{
    return(
      <NotesContainer>
          <label>
              <span>备注</span>
              <input type="text" placeholder="在这里添加备注"/>
          </label>
      </NotesContainer>
    )
}

export default NotesSection