import styled from 'styled-components';

export const TagList = styled.ol`
  font-size:1.8rem;
  background: white;
  border: 1px solid red;
  >li{
    border-bottom:1px solid #d5d9d9;
    line-height:2rem;
    padding:1.2rem 1.6rem 1.2rem 0;
    margin-left:1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg{
    width:2.4rem;
    height: 2.4rem;
  }
`

export const Button = styled.button`
  font-size: 1.8rem;
  border:none;
  padding:.8rem 1.2rem;
  background: #767676;
  border-radius:4px;
  color:white;
`
export const Center = styled.div`
  margin-top:6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
