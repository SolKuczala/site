import React from 'react';

import simpleStyles from '../commons/markdown.module.sass';

export const HTMLContent = ({ content, ...props }) => (
    <div dangerouslySetInnerHTML={{ __html: content }} {...props} className={simpleStyles.container} />
);

export default ({ content, ...props }) => (
    <div {...props} className={simpleStyles.container}>
        {content}
    </div>
);
