import {NavLink, Outlet} from 'react-router-dom';
import React, {Fragment} from 'react';
import {ReactComponent as LabelLogo} from 'assets/icons/label.svg';
import {ReactComponent as MongyLogo} from 'assets/icons/money.svg';
import {ReactComponent as StatisticsLogo} from 'assets/icons/statistics.svg';

import {
  Wrapper, Main, Nav
} from './navigation.styles';


const Navigation = () => {
  return (
    <Fragment>
      <Wrapper>
        <Main>
          <Outlet/>
        </Main>
        <Nav>
          <ul>
            <li>
              <NavLink to="/tags" >
                <LabelLogo/>
                <h4>标签</h4>
              </NavLink>
            </li>
            <li>
              <NavLink to="/money" >
                <MongyLogo/>
                <h4>记账</h4>
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics" >
                <StatisticsLogo/>
                <h4>统计</h4>
              </NavLink>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Fragment>
  );
};

export default Navigation;