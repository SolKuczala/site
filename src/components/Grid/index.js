import React from 'react';

import gridStyles from './grid.module.sass';

export const Box = ({ children }) => (
    <div className={gridStyles.box}>
        {children}
    </div>
);

export default ({ boxes = [] }) => (
    <div className={gridStyles.container}>
        {boxes}
    </div>
);
