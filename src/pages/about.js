import React from 'react';
import styled from 'styled-components';

import { HeaderLogo, HeadingXL, HeadingL, Layout, SEO, TextBody } from '../components';

const Company = styled.a`
  text-decoration: underline;
`;

const Location = styled.p`
  font-size: 16px;
  font-style: italic;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 2vh;
`;

const Experience = ({ node }) => {
  return (
    <>
      <h1>
      {node.jobTitle} —{' '}
      <Company href={node.companyLink}>{node.companyName}</Company>
      </h1>
      <Location>{node.location}</Location>
      <Text>{node.startDate} - {node.endDate}</Text>
      <Text>
      - {node.accomplishment1}
      <br />
      - {node.accomplishment2}
      <br />
      - {node.accomplishment3}
      </Text>
    </>
  );
};

const About = ({data}) => {
  return (
    <>
      <SEO title="About" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <TextBody>
          <HeadingL>Experience</HeadingL>
          {data.allContentfulExperience.edges.map(edge => (
            <Experience key={edge.node.position} node={edge.node} />
          ))}
          <HeadingL>Education</HeadingL>
          <h1>Web Development — App Academy</h1>
          <Location>New York, NY</Location>
          <Text>April 2016 - July 2016</Text>
          <Text>
            1000-hour full-stack web development bootcamp with below 3%
            acceptance rate
          </Text>
          <Text>
            Topics include: TDD, scalability, algorithms, OOP, coding style,
            REST, security, single-page applications, and web development best
            practices
          </Text>
          <h1>BA Music Performance — SUNY New Paltz</h1>
          <Location>New Paltz, NY</Location>
          <Text>August 2007 - May 2010</Text>
          <Text>GPA 3.9, Summa cum laude</Text>
          <Text>
            Named outstanding graduate by School of Fine and Performing Arts
          </Text>
        </TextBody>
      </Layout>
    </>
  );
};

export default About;

export const pageQuery = graphql`
  query experienceQuery {
    allContentfulExperience(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: position, order: DESC }
    ) {
      edges {
        node {
          jobTitle
          companyName
          startDate
          endDate
          location
          companyLink
          accomplishment1
          accomplishment2
          accomplishment3
          position
        }
      }
    }
  }
`;

