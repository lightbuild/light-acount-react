import {InputHTMLAttributes,FC} from 'react';
import {Label} from './input.styles';

type InputProps = {
  label:string
} & InputHTMLAttributes<HTMLInputElement>;

const Input:FC<InputProps> = (props) =>{
  const {label,...otherProps} = props
  return(
    <Label>
      <span>{label}</span>
      <input {...otherProps}/>
    </Label>
  )
}

export default Input