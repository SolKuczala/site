import React from 'react';

import TwitterIcon from '../../icons/twitter-brands.svg';
import LinkedinIcon from '../../icons/linkedin-in-brands.svg';
import MailIcon from '../../icons/envelope-solid.svg';

import { Box } from '../Grid';
import ExtLink from '../ExtLink';
import Img from '../Img';
import personStyles from './person.module.sass';

export default ({ id, name, imgSrc, rol, twitter, linkedin, mail }) => (
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
);
