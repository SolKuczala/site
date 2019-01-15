import React from 'react';
import { Link } from 'gatsby';

import ArrowRightIcon from '../../icons/angle-right-solid.svg';
import IconButton from '../IconButton';
import './sidebar.sass';

export default ({ show, onHideSideMenu }) => (
    <>
        {show && <div className="sidebar-shadow" onClick={onHideSideMenu} />}
        <div className={`sidebar ${show ? 'opened' : ''}`}>
            <IconButton description="right arrow icon" onClick={onHideSideMenu} disabled={!show}>
                <ArrowRightIcon style={{color: '#333'}} />
            </IconButton>
            {/* to don't allow focus when component is hidden */}
            {show && (
                <nav>
                    <Link to="/" onClick={onHideSideMenu}>inicio</Link>
                    <Link to="/material" onClick={onHideSideMenu}>material</Link>
                    <Link to="/nosotros" onClick={onHideSideMenu}>nosotros</Link>
                    <Link to="/contacto" onClick={onHideSideMenu}>contacto</Link>
                </nav>
            )}
        </div>
    </>
);