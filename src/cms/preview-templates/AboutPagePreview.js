import React from 'react';
import { AboutTemplate } from '../../templates/about-page';

export default ({ entry, widgetFor }) => (
    <AboutTemplate
        content={widgetFor('body')}
        title={entry.getIn(['data', 'title'])}
    />
);
