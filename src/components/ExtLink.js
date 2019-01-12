import React from 'react';

export default ({ ...props }) => (
    <a target="_blank" rel="noopener" {...props}>
        {props.children}
    </a>
);
