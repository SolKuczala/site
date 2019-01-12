import React from 'react'
import { graphql } from 'gatsby';

import TwitterIcon from '../../icons/twitter-brands.svg';
import LinkedinIcon from '../../icons/linkedin-in-brands.svg';
import MailIcon from '../../icons/envelope-solid.svg';

import Grid, { Box } from '../../components/Grid';
import ExtLink from '../../components/ExtLink';
import Img from '../../components/Img';
import simpleStyles from '../../commons/simple.module.sass';
import personStyles from './person.module.sass';

const mapToBox = (edges) => edges.map(
    ({ node: { id, frontmatter: { name, imgSrc, rol, twitter, linkedin, mail } } }) => (
        <Box key={id}>
            <div className={personStyles.imgContainer}>
                <Img src={imgSrc} />
            </div>
            <div className={personStyles.content}>
                <h3>{name}</h3>
                <h4>{rol}</h4>
                <div className={personStyles.socialContainer}>
                    {twitter && (
                        <ExtLink href={twitter} alt="twitter">
                            <TwitterIcon />
                        </ExtLink>
                    )}
                    {linkedin && (
                        <ExtLink href={linkedin} alt="linkedin">
                            <LinkedinIcon />
                        </ExtLink>
                    )}
                    {mail && (
                        <ExtLink href={`mailto:${mail}`} alt="mail">
                            <MailIcon />
                        </ExtLink>
                    )}
                </div>
            </div>
        </Box>
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
