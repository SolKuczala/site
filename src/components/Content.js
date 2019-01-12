import React from 'react';

export const HTMLContent = ({ content, ...props }) => (
    <div dangerouslySetInnerHTML={{ __html: content }} {...props} />
);

export default ({ content, ...props }) => (
    <div {...props}>
        {content}
    </div>
);
