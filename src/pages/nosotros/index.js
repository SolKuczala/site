import React from 'react'
import { graphql } from 'gatsby';

import Grid from '../../components/Grid';
import simpleStyles from '../../commons/simple.module.sass';
import SocialBox from '../../components/SocialBox';

const mapToBox = (edges) => edges.map(
    ({ node: { id, frontmatter } }) => (
        <SocialBox key={id} {...frontmatter} />
    )
);

export default ({ data: { persons } }) => (
    <section className={simpleStyles.content}>
        <h1>El equipo</h1>
        {persons
            ? <Grid boxes={mapToBox(persons.edges)} />
            : <p>No hay nadie... Estás por tu cuenta :O</p>
        }
    </section>
);

export const pageQuery = graphql`
    {
        persons: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "person" } } }) {
            edges {
                node {
                    ...personInfo
                }
            }
        }
    }

    fragment personInfo on MarkdownRemark {
        id
        frontmatter {
            name
            imgSrc
            rol
            twitter
            linkedin
            mail
        }
    }
`;
