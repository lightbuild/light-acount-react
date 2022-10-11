import styled from 'styled-components';

export const TagsContainer = styled.section`
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
      &.selected{
        background: #f60;
      }
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

