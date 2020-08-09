import React from 'react';
import styled from 'styled-components';

import { formatDate } from '../utils/';

import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
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

const ConferenceTalkEntry = ({ node }) => {
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

const OtherTalkEntry = ({ node }) => {
  return (
    <>
      <hi>{node.talkSource}</hi>
      <Detail>
        {node.talkType} - {formatDate(node.date)}
      </Detail>
      <Text>
        <Link href={node.talkLink}>{node.talkTitle}</Link>
      </Text>
    </>
  );
};

const Talks = ({ data }) => {
  console.log(data);
  console.log(typeof new Date());
  return (
    <>
      <SEO title="Talks" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>Talks</HeadingXL>
        <TextBody>
          <HeadingL>Conference Talks</HeadingL>
          {data.allContentfulConferenceTalk.edges.map(edge => (
            <ConferenceTalkEntry key={edge.node.id} node={edge.node} />
          ))}
          <br />
          <br />
          <HeadingL>Other Talks</HeadingL>
          {data.allContentfulOtherTalk.edges.map(edge => (
            <OtherTalkEntry key={edge.node.id} node={edge.node} />
          ))}
        </TextBody>
      </Layout>
    </>
  );
};

export default Talks;

export const pageQuery = graphql`
  query talkQuery {
    allContentfulConferenceTalk(filter: { node_locale: { eq: "en-US" } }) {
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
    allContentfulOtherTalk(filter: { node_locale: { eq: "en-US" } }) {
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
