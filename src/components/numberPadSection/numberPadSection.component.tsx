import React from 'react'
import {NumberPadContainer} from './numberPadSection.styles';

const NumberPadSection = () =>{
    return(
      <NumberPadContainer>
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </NumberPadContainer>
    )
}

export default NumberPadSection;