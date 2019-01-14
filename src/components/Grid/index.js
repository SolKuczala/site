import React from 'react';

import gridStyles from './grid.module.sass';

export const Box = ({ children, ...props }) => (
    <div className={gridStyles.box} {...props}>
        {children}
    </div>
);

export default ({ boxes = [] }) => (
    <div className={gridStyles.container}>
        {boxes}
    </div>
);
