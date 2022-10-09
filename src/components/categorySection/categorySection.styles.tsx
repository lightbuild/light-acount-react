import styled from 'styled-components';

export const CategoryContainer = styled.section`
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