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
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <Post key={node.id}>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
