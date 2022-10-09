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

`;
const CategorySection = styled.section``;
const NumberPadSection = styled.section``;

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
          <input type="text"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>
          100
        </div>
        <div>
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Fragment>
  );
}

export default Money;