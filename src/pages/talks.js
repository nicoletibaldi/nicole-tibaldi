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

const TitleLink = styled(Link)`
  font-weight: bold;
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

const TalkEntry = ({ node }) => {
  return (
    <>
      <TitleLink href={node.conferenceSite} key={node.id}>
        {node.conferenceName}
      </TitleLink>
      <Detail>
        {node.location} - {formatDate(node.talkDate)}
      </Detail>
      <Text>
        {node.talkTitle} - <Link href={node.slideLink}>Slides</Link>
        {node.videoLink && (
          <>
            <>{' || '}</>
            <Link href={node.videoLink}>Video</Link>
          </>
        )}
      </Text>
    </>
  );
};

const Talks = ({ data }) => {
  return (
    <>
      <SEO title="Conference Talks" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>Conference Talks</HeadingXL>
        <TextBody>
          {data.allContentfulConferenceTalk.edges.map(edge => (
            <TalkEntry key={edge.node.id} node={edge.node} />
          ))}
        </TextBody>
      </Layout>
    </>
  );
};

export default Talks;

export const pageQuery = graphql`
  query talkQuery {
    allContentfulConferenceTalk(
      filter: { node_locale: { eq: "en-US" } },
      sort: { fields: talkDate, order: DESC }
      ) {
      edges {
        node {
          id
          conferenceName
          conferenceSite
          location
          talkTitle
          talkDate
          slideLink
          videoLink
        }
      }
    }
  }
`;
