import React from 'react';
import { MaterialTemplate } from '../../templates/material-page';

export default ({ entry, widgetFor }) => (
    <MaterialTemplate
        content={widgetFor('body')}
        title={entry.getIn(['data', 'title'])}
        description={entry.getIn(['data', 'description'])}
        date={entry.getIn(['data', 'date'])}
    />
);
