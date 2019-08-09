import React from 'react';
import PropTypes from 'prop-types';
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

const Attribution = styled.footer`
  padding-bottom: 3vh;
  margin-top: 20vh;
  font-size: 14px;
  display: flex;
  justify-content: center;

  @media (max-width: 849px) {
    font-size: 10px;
  }
`;

const Footer = props => {
  return (
    <>
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
      {props.attribution && (
        <Attribution>
          All content on this page is my own, unless otherwise indicated. This
          site was created using the&nbsp;
          <ButtonLink href="https://github.com/lewislbr/lewis-gatsby-starter-blog">
            Lewis Gatsby Starter Blog.
          </ButtonLink>
        </Attribution>
      )}
    </>
  );
};

Footer.propTypes = {
  attribution: PropTypes.bool,
};

export default Footer;
