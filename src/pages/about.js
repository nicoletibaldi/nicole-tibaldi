import React from 'react';
import styled from 'styled-components';

import {
  HeaderLogo,
  HeadingL,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
} from '../components';

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

const About = () => {
  return (
    <>
      <SEO title="About" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <TextBody>
          <HeadingL>Experience</HeadingL>
          <h1>
            Engineering Manager —{' '}
            <Company href="http://circleci.com">CircleCI</Company>
          </h1>
          <Location>Remote (San Francisco, CA)</Location>
          <Text> June 2019 - Present</Text>
          <h1>
            Frontend Engineer —{' '}
            <Company href="http://manifold.co">Manifold</Company>
          </h1>
          <Location>Remote (Halifax, NS) </Location>
          <Text>November 2017 - June 2019</Text>
          <Text>
            Frontend engineer for several of Manifold's internal teams.
            Developed user-facing applications using React, JavaScript, and
            Styled Components. Spent a total of one year in two different
            leadership roles, during which time I was responsible for
            collaboration with product and design, agile processes, and team
            delivery. Was heavily involved in the evolution of Manifold's
            technical hiring process, with a focus on faster turnaround and more
            diverse hires.
          </Text>
          <Text>
            Notable accomplishments:
            <br />
            - Led frontend testing efforts, which resulted in an increase in
            coverage from less than 10% to 80% over a 6-month period
            <br />
            - Led self-service partner onboarding project, removing manual
            process & saving engineering time
            <br />
            - Created animations and d3.js visualizations to improve UX for
            product billing pages
            <br />- Wrote and refined talks about hiring, testing, and soft
            skills - accepted to five conferences in 2019
          </Text>
          <h1>Software Engineer — BuildIt @ wiprodigital</h1>
          <Location>Brooklyn, NY</Location>
          <Text>March 2017 - October 2017</Text>
          <Text>
            Fullstack engineer for a consultancy focused on digital
            transformation. Along with client work, developed an internal room
            booking tool for use in BuildIt's various offices. Acted as a
            representative for the team by leading the vast majority of internal
            demos and presentations.
          </Text>
          <Text>
            Notable accomplishments:
            <br />
            - Led TDD efforts in React codebase, using Jest and Enzyme
            <br />- Successfully advocated for a refactor of Redux actions and
            reducers, increasing clarity and ease of future development
          </Text>
          <h1>
            Frontend Engineer —{' '}
            <Company href="http://tablethotels.com">Tablet Hotels</Company>
          </h1>
          <Location>New York, NY</Location>
          <Text>August 2016 - March 2017</Text>
          <Text>
            Engineer on Tablet's frontend team. Worked independently on projects
            as the only frontend engineer during a transition period of ~3
            months. Assisted in hiring new frontend team members and improving
            hiring process
          </Text>
          <Text>
            Notable accomplishments
            <br />
            - Participated in a rewrite of Tablet’s consumer-facing booking
            site, transitioning from Knockout.js to React
            <br />- Implemented new search feature using Google Maps API
          </Text>
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
