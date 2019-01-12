import React from 'react';
import { graphql, Link } from 'gatsby';

import Grid, { Box } from '../../components/Grid';
import simpleStyles from '../../commons/simple.module.sass';

const mapToBox = (edges) => edges.map(({
    node: {
        id,
        fields: { slug },
        frontmatter: { title, description, date }
    }}) => (
        <Box key={id}>
            <Link to={slug}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{new Date(date).toLocaleDateString()}</p>
            </Link>
        </Box>
    )
);

export default ({ data: { articles } }) => (
    <section className={simpleStyles.content}>
        <h1>Material</h1>
        {articles
            ? <Grid boxes={mapToBox(articles.edges)} />
            : <p>No hay material... Molestá a los profes para que suban algo.</p>
        }
    </section>
);

export const materialPageQuery = graphql `
    {
        articles: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "material" } } }) {
            edges {
                node {
                    ...articleInfo
                }
            }
        }
    }

    fragment articleInfo on MarkdownRemark {
        id
        fields {
            slug
        }
        frontmatter {
            description
            title
            date
        }
    }
`;
