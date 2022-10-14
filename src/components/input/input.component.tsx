import React from 'react';
import {Label} from './input.styles';

type Props = {
  label:string
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input:React.FC<Props> = (props) =>{
  const {label,...rest} = props
  return(
    <Label>
      <span>{label}</span>
      <input {...rest}/>
    </Label>
  )
}

export default Input