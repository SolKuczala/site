import React from 'react';
import { graphql } from 'gatsby';

import Content, { HTMLContent } from '../components/Content';
import simpleStyles from '../commons/simple.module.sass';

export const MaterialTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content;
    return (
        <section className={simpleStyles.content}>
            <h1>{title}</h1>
            <PageContent content={content} />
        </section>
    );
};

export default ({ data: { markdownRemark: post } }) => (
    <MaterialTemplate
        title={post.frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
    />
);

export const aboutQuery = graphql `
    query MaterialPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
            }
        }
    }
`;
