import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import {
  Button,
  HeaderBack,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
} from '../components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ButtonCentered = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
`;

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <HeaderBack />
      <Layout>
        <Wrapper>
          <HeadingXL>NOT FOUND.</HeadingXL>
          <TextBody style={{ textAlign: 'center' }}>
            This page doesn&#39;t exist{' '}
            <span role="img" aria-label="duh">
              😓
            </span>
          </TextBody>
        </Wrapper>
      </Layout>
    </>
  );
};

export default NotFoundPage;
