import React from 'react';
import styled from 'styled-components';

import { formatDate } from '../utils/';

import {
  HeaderLogo,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
} from '../components';

const Link = styled.a`
  text-decoration: underline;
`;

const Detail = styled.div`
  font-size: 16px;
  font-style: italic;
  margin-bottom: 0.5vh;
`;

const Text = styled.div`
  font-size: 16px;
  margin-bottom: 2vh;
`;

const InterviewEntry = ({ node }) => {
  return (
    <>
      <h1>{node.talkSource}</h1>
      <Detail>
        {node.talkType} - {formatDate(node.date)}
      </Detail>
      <Text>
        <Link href={node.talkLink}>{node.talkTitle}</Link>
      </Text>
    </>
  );
};

const Interviews = ({ data }) => {
  return (
    <>
      <SEO title="Interviews" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>Interviews</HeadingXL>
        <TextBody>
          {data.allContentfulOtherTalk.edges.map(edge => (
            <InterviewEntry key={edge.node.id} node={edge.node} />
          ))}
        </TextBody>
      </Layout>
    </>
  );
};

export default Interviews;

export const pageQuery = graphql`
  query interviewQuery {
    allContentfulOtherTalk(
      filter: { node_locale: { eq: "en-US" } },
      sort: { fields: date, order: DESC }
      ) {
      edges {
        node {
          id
          talkSource
          talkType
          date
          talkTitle
          talkLink
        }
      }
    }
  }
`;
