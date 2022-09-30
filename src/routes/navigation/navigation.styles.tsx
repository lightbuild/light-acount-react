import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  min-height:100vh;
  
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  flex-grow:1;
`
export const Nav= styled.nav`
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  line-height:2.2rem;
  
  > ul {
    display: flex;
    flex-direction: row;
    font-size:1.6rem;
    >li{
      width:33.3333%;
      padding:1.6rem;
    }
  }
`
export const LogoContainer = styled(Link)`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  svg{
    fill:red;
    width:2.4rem;
    height: 2.4rem;
  }
`;