import React from 'react';

import { HeaderLogo, HeadingXL, Layout, SEO, TextBody } from '../components';

const Contact = ({ data }) => {
  return (
    <>
      <SEO title="Contact" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>Contact</HeadingXL>
        <TextBody>
          I'm always happy to chat about engineering, leadership, and a variety
          of other topics. I am also interested in speaking opportunities and
          volunteering - please reach out!
          <br />
          <br />
          Feel free to email me at nicoletibaldi@me.com, or message me using any
          of the social media links at the bottom of this page.
          <br />
          <br />
          Please keep in mind that I am not currently looking for job
          opportunities.
        </TextBody>
      </Layout>
    </>
  );
};

export default Contact;
