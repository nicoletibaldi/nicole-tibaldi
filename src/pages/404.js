import React from 'react';
import styled from 'styled-components';

import { HeaderBack, HeadingXL, Layout, SEO, TextBody } from '../components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
