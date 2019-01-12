import React from 'react';

import simpleStyles from '../commons/simple.module.sass';

export default ({ location }) => {
    let error = '🤷‍♂️';
    if(/^\?error=.*/i.test(location.search)) {
        error = location.search.replace(/^\?error=(.*)/i, '$1');
    }
    return (
        <section className={simpleStyles.content}>
            <h1>Ups, parece que hubo un error :/</h1>
            <p>{decodeURI(error)}</p>
        </section>
    );
}