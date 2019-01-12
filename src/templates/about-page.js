import React from 'react';
import { graphql } from 'gatsby';

import simpleStyles from '../commons/simple.module.sass';
import Content, { HTMLContent } from '../components/Content';

export const AboutTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content;
    return (
        <section className={simpleStyles.content}>
            <h1>{title}</h1>
            <PageContent content={content} />
        </section>
    );
};

export default ({ data: { markdownRemark: post } }) => (
    <AboutTemplate
        title={post.frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
    />
);

export const aboutQuery = graphql `
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
            }
        }
    }
`;
