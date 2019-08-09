import React from 'react';

import { HeaderLogo, HeadingXL, Layout, SEO, TextBody } from '../components';

const Talks = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>Coming soon!</HeadingXL>
        <TextBody>
          I'm working on publishing the slides and videos from my recent
          conference talks. Check back soon!
        </TextBody>
      </Layout>
    </>
  );
};

export default Talks;
