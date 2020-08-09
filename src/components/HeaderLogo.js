import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FixedBar } from '../components';

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  background: -webkit-linear-gradient(
    240deg,
    hsl(189, 100%, 50%),
    hsl(174, 79%, 49%),
    hsl(188, 81%, 59%),
    hsl(213, 62%, 61%),
    hsl(240, 100%, 70%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 849px) {
    font-size: 12px;
  }
`;

const HeaderLogo = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo>nt</Logo>
      </Link>
      <Link to="/talks">
        <p>talks</p>
      </Link>
      <Link to="/interviews">
        <p>interviews</p>
      </Link>
      <Link to="/blog">
        <p>blog</p>
      </Link>
      <Link to="/about">
        <p>about</p>
      </Link>
      <Link to="/contact">
        <p>contact</p>
      </Link>
    </HeaderWrapper>
  );
};

export default HeaderLogo;
