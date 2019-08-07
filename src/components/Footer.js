import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from '../components';

const Container = styled.footer`
  padding-top: 5vh;
  padding-bottom: 3vh;
  margin-top: 20vh;
  text-align: left;
  font-size: 14px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 849px) {
    font-size: 10px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <ButtonLink href="https://twitter.com/nicoletibaldi" target="_blank">
          Twitter
        </ButtonLink>
        <ButtonLink href="https://github.com/nicoletibaldi" target="_blank">
          Github
        </ButtonLink>
        <ButtonLink href="https://linkedin.com/in/ntibaldi92" target="_blank">
          LinkedIn
        </ButtonLink>
      </div>
      <div>© 2019 Nicole Tibaldi</div>
    </Container>
  );
};

export default Footer;
