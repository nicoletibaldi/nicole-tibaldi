import React from 'react';
import styled from 'styled-components';

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

const Detail = styled.p`
  font-size: 16px;
  font-style: italic;
  margin-bottom: 0.5vh;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 2vh;
`;

const Talks = () => {
  return (
    <>
      <SEO title="Talks" />
      <HeaderLogo />
      <Layout>
        <HeadingXL>Talks</HeadingXL>
        <TextBody>
          <HeadingL>Conference Talks</HeadingL>
          <h1>
            <Link href="https://techbash.com/">TechBash</Link>
          </h1>
          <Detail>Mount Pocono, PA - November 2019</Detail>
          <Text>
            "Tech hiring is broken" is broken -{' '}
            <Link href="https://docs.google.com/presentation/d/1mJesgcY1GaJNRw7LDmBz2TUADCBwmYZi9femHhxnCcw/edit?usp=sharing">
              Slides
            </Link>{' '}
            <br />
            Zero to Eighty: Getting your testing initiative off the line -{' '}
            <Link href="https://www.icloud.com/keynote/0q6PDnl5Vd-fbjHNm-yDlDohw#Zero_to_Eighty_-_final">
              Slides
            </Link>
          </Text>
          <h1>
            <Link href="https://allthingsopen.org/">All Things Open</Link>
          </h1>
          <Detail>Raleigh, NC - October 2019</Detail>
          <Text>
            Zero to Eighty: Getting your testing initiative off the line -{' '}
            <Link href="https://docs.google.com/presentation/d/1j3ydwILzhIKGYbjLyiH32sOhBfFhhUv0WZsi5r6ZTUM/edit?usp=sharing">
              Slides
            </Link>
          </Text>
          <h1>
            <Link href="https://www.codercruise.com/">CoderCruise</Link>
          </h1>
          <Detail>Port Canaveral, FL - August 2019</Detail>
          <Text>
            "Tech hiring is broken" is broken -{' '}
            <Link href="https://www.icloud.com/keynote/0YoPHXxu6iYeyszH8dZiaLBng#THIBIB_-_CoderCruise">
              Slides
            </Link>
          </Text>
          <h1>
            <Link href="https://2019.gocon.ca/">GoCon Canada</Link>
          </h1>
          <Detail>Toronto, ON - May 2019</Detail>
          <Text>
            "Tech hiring is broken" is broken -{' '}
            <Link href="https://docs.google.com/presentation/d/1Lp07aeBhyZXUFEP-dT1JSE96jM9Yb8MtBzMtESiBnLs/edit#slide=id.g58776c4470_1_53">
              Slides
            </Link>{' || '}
            <Link href="https://www.youtube.com/watch?v=X09mPjOQlIM">
              Video
            </Link>
          </Text>
          <h1>ForwardJS</h1>
          <Detail>Ottawa, ON - April 2019</Detail>
          <Text>
            Zero to Eighty: Getting your testing initiative off the line
          </Text>
          <br/>
          <br/>
          <HeadingL>Other Talks</HeadingL>
          <h1>PowerToFly</h1>
          <Detail>Live Chats - October 2019</Detail>
          <Text>
            <Link href="https://powertofly.com/career/live-chats/159857-remote-101-tips-for-scoring-and-thriving-at-a-remote-job">
            Remote 101: Tips for scoring - and thriving at - a remote job{' '}
            </Link>
          </Text>
          <h1>PowerToFly</h1>
          <Detail>"Ask Her Anything" - January 2019</Detail>
          <Text>
            <Link href="https://powertofly.com/career/live-chats/59435-ask-her-anything-how-nicole-became-a-frontend-engineer-at-manifold">
            How Nicole became a frontend engineer at Manifold
            </Link>
          </Text>
        </TextBody>
      </Layout>
    </>
  );
};

export default Talks;
