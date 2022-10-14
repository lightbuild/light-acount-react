import styled from 'styled-components';

export const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height:20px;
  padding:14px;
  background: white;
  
  > svg{
    fill:white;
    width:2.4rem;
    height: 2.4rem;
    &:nth-child(1){
      fill:#f60;
    }
  }
`
export const InputWrapper = styled.div`
  background: white;
  padding:0 1.6rem;
  margin-top:.8rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:6rem;
`