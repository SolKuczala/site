import React from 'react';
import SocialBox from '../../components/SocialBox';

export default ({ entry }) => (
    <SocialBox
        name={entry.getIn(['data', 'name'])}
        imgSrc={entry.getIn(['data', 'imgSrc'])}
        rol={entry.getIn(['data', 'rol'])}
        twitter={entry.getIn(['data', 'twitter'])}
        linkedin={entry.getIn(['data', 'linkedin'])}
        mail={entry.getIn(['data', 'mail'])}
    />
);
