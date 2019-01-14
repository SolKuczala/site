import React from 'react';
import { graphql, Link } from 'gatsby';

import Grid, { Box } from '../../components/Grid';
import simpleStyles from '../../commons/simple.module.sass';
import materialStyles from './material.module.sass';

const colors = {
    js: { primary: 'yellow', secondary: '#eeee00' },
    html: { primary: '#f09c9c', secondary: '#eb8787' },
    css: { primary: '#c49fe6', secondary: '#be8ceb' },
    general: { primary: '#eee', secondary: '#ddd' }
};

const mapToBox = (edges) => edges.map(({
    node: {
        id,
        fields: { slug },
        frontmatter: { title, description, date, type }
    }}) => {
        const { primary, secondary } = colors[type];
        const backgroundImage = `
            repeating-linear-gradient(
                -45deg,
                ${primary},
                ${primary} 20px,
                ${secondary} 20px,
                ${secondary} 40px
            )
        `;
        return (
            <Box key={id} style={{backgroundImage}}>
                <Link to={slug} className={materialStyles.link}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{new Date(date).toLocaleDateString()}</p>
                </Link>
            </Box>
        );
    }
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
        articles: allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "material" } } },
            sort: {fields: frontmatter___date, order: ASC}
        ) {
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
            type
            date
        }
    }
`;
