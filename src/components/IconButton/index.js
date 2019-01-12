import React from 'react';
import iconButtonStyles from './iconButton.module.sass';

export default ({ children, description, ...props }) => (
    <button className={iconButtonStyles.container} {...props}>
        <span role="img" aria-label={description}>
            {children}
        </span>
    </button>
);
