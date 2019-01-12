import React from 'react';
import { Link } from 'gatsby';

import simpleStyles from '../commons/simple.module.sass';

const NotFoundPage = () => (
    <section className={simpleStyles.content}>
        <h1>Página no encontrada :(</h1>
        <Link to="/">Volver a la página de inicio</Link>
    </section>
);

export default NotFoundPage;
