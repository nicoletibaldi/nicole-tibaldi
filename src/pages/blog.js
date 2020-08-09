import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from '../components';

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: 849px) {
    padding-left: 0;
  }
`;

const Blog = ({ data }) => {
  return (
    <>
      <SEO title="Blog" />
      <HeaderLogo />
      <HeadingXL>Blog</HeadingXL>
      <Layout>
        {data.allContentfulBlog.edges.map(edge => (
          <Link to={`/blog/${edge.node.slug}`} key={edge.node.id}>
            <Post>
              <HeadingL>{edge.node.title}</HeadingL>
              <TextBody>{edge.node.title}</TextBody>
              <TextDate>{edge.node.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  );
};

export default Blog;

export const pageQuery = graphql`
  query blogQuery {
    allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          slug
          id
          title
          date
        }
      }
    }
  }
`;
