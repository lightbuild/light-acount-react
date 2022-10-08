import {Link, Outlet} from 'react-router-dom';
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
              <Link to="/tags">
                <LabelLogo/>
                <h4>标签</h4>
              </Link>
            </li>
            <li>
              <Link to="/money">
                <MongyLogo/>
                <h4>记账</h4>
              </Link>
            </li>
            <li>
              <Link to="/statistics">
                <StatisticsLogo/>
                <h4>统计</h4>
              </Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Fragment>
  );
};

export default Navigation;