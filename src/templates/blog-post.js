import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { formatDate } from '../utils/';

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
    const { title, date, content } = this.props.data.contentfulBlog;
    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <p className="copy">{children}</p>
        ),
      },
      renderMark: {},
    };
    return (
      <>
        <SEO title={title} />
        <HeaderBack />
        <Layout>
          <HeadingXL>{title}</HeadingXL>
          <TextDate>{formatDate(date)}</TextDate>
          <TextBody>
            {documentToReactComponents(content.json, options)}
          </TextBody>
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
      content {
        json
      }
    }
  }
`;
