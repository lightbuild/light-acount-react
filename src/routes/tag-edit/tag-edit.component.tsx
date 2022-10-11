import React from 'react';
import {useParams} from 'react-router-dom';

const TagEdit = () =>{
   const {tag} = useParams()
   return(
     <div>{tag}</div>
   )
}

export default TagEdit