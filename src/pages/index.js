import React from 'react';
import styled from 'styled-components';

import { HeaderLogo, HeadingXL, Layout, SEO } from '../components';

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: 849px) {
    margin-bottom: 15vh;
  }
`;

const Text = styled.p`
  display: block;
  max-width: 28em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;

  font-size: 18px;
  line-height: 1.6;
  color: var(--dark-color-light);

  @media (max-width: 849px) {
    font-size: 16px;
  }
`;

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout attribution>
        <Hero>
          <HeadingXL>Hi! I'm Nicole.</HeadingXL>
          <Text>
            I'm an engineering leader, frontend engineer, and conference speaker.
            Currently, I'm a Senior Engineering Manager at The New York Times.
          </Text>
          <Text>
            My past management experience includes roles at CircleCI and Gatsby. 
            As an engineering leader, I've helped teams use process and data to better
            understand their work and move toward faster delivery. I care deeply about 
            distributed teams, and have worked tirelessly to develop productive 
            and sustainable remote work practices. I am equally passionate about improving 
            tech hiring, with the objective of making interviews more inclusive.
          </Text>
          <Text>
            As an individual contributor, I have been a frontend engineer for both Tablet Hotels
            and Manifold. I've focused my energy on frontend best practices,
            collaborating with design and product, and building good habits
            around testing.
          </Text>
        </Hero>
      </Layout>
    </>
  );
};

export default Home;
