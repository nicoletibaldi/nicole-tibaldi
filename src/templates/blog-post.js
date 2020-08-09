import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import {
  HeaderBack,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from '../components';

class BlogPost extends Component {
  render() {
    const { title, date } = this.props.data.contentfulBlog;
    return (
      <>
        <SEO title={title} />
        <HeaderBack />
        <Layout>
          <HeadingXL>{title}</HeadingXL>
          <TextDate>{date}</TextDate>
          <TextBody>{title}</TextBody>
        </Layout>
      </>
    );
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      date
    }
  }
`;
