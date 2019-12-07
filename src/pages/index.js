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
            I'm an engineering leader, a frontend engineer, a conference
            speaker, and an avid lover of both dogs and baseball. Currently, I'm
            working as an Engineering Manager at CircleCI.
          </Text>
          <Text>
            In recent years, I have worked as a frontend engineer for both
            Tablet Hotels and Manifold. I've focused my energy on frontend best
            practices, collaborating with design and product, and building good
            habits around testing.
          </Text>
          <Text>
            I've worked in various leadership roles helping teams understand
            their work, move toward faster delivery, and build trust and
            rapport. I care deeply about culture, and more-specifically, remote
            culture. I'm always trying to make it easier for my teams to
            collaborate while working from the places that are most comfortable
            for them. I have also spent many hours trying to improve tech hiring
            and make it more inclusive.
          </Text>
        </Hero>
      </Layout>
    </>
  );
};

export default Home;
