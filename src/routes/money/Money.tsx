import React, {Fragment} from 'react';
import styled from 'styled-components';


const TagsSection = styled.section`
  background: #ffffff;
  padding: 1.2rem 1.6rem;

  > ol {
    margin: 0 -12px;

    > li {
      background: #d9d9d9;
      border-radius: 1.8rem;
      display: inline-block;
      padding: .3rem 1.8rem;
      font-size: 1.4rem;
      margin: .8rem 1.2rem;
    }
  }

  > button {
    background: none;
    border: none;
    padding: .2rem .4rem;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: .8rem;
  }
`;
const NotesSection = styled.section`
  background: #f5f5f5;
  padding:0 1.6rem;
  font-size:1.4rem;
  >label{
    display: flex;
    align-items: center;
    >span{
      margin-right:1.6rem;
      white-space: nowrap;
    }
    >input{
      display: block;
      width: 100%;
      height: 7.2rem;
      background:none;
      border:none;
    }
  }
`;
const CategorySection = styled.section`
  font-size:2.4rem;
  >ul{
    display: flex;
    background: #c4c4c4;
    >li{
      width: 50%;
      text-align:center;
      padding:1.6rem 0;
      position: relative;
      &.selected::after{
        content:'';
        display: block;
        height:3px;
        background: #333;
        position: absolute;
        bottom:0;
        width: 100%;
        left:0;
      }
    }
  }
`;
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  
  >.output{
    background: white;
    font-size:3.6rem;
    line-height:7.2rem;
    text-align:right;
    padding:0 1.6rem;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
    inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    >button{
      font-size: 18px; 
      float: left; 
      width: 25%; 
      height: 64px; 
      border: none;
      &.ok{ height: 128px; float: right; }
      &.zero{ width: 50%; }
      &:nth-child(1){
        background:#f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#B8B8B8;
      }
      &:nth-child(12) {
        background:#9A9A9A;
      }
      &:nth-child(14) {
        background:#A9A9A9;
      }
    }
  }
`;

function Money() {
  return (
    <Fragment>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className='selected'>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
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
      </NumberPadSection>
    </Fragment>
  );
}

export default Money;