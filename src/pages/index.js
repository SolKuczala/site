import React from 'react';

import simpleStyles from '../commons/simple.module.sass';

export default () => (
    <section className={simpleStyles.content}>
        <h1>Hola mundo!</h1>
        <p>Acá vas a encontrar información útil para el curso de <em>Introducción a la programación.</em></p>
        <p>Te invito a usar nuestro humilde sidebar para navegar por los recursos.</p>
    </section>
);
