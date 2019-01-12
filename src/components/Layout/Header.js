import React from 'react';
import { Link } from 'gatsby';

import IconButton from '../IconButton';
import ArrowLeftIcon from '../../icons/angle-left-solid.svg';

export default ({ onShowSideMenu }) => (
    <header>
        <Link to="/">Comunidad IT</Link>
        <IconButton description="left arrow icon" onClick={onShowSideMenu}>
            <ArrowLeftIcon />
        </IconButton>
    </header>
);
