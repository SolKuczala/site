import React from 'react';

import ExtLink from '../components/ExtLink';
import simpleStyles from '../commons/simple.module.sass';

export default () => (
    <section className={simpleStyles.content}>
        <h1>Hola mundo!</h1>
        <p style={{fontSize: '1.3em'}}>
            Somos profes y colaboradores de <ExtLink href="http://www.comunidadit.org/">Comunidad IT</ExtLink> Villacrespo.
        </p>
        <p style={{fontSize: '1.3em'}}>
            Orgullosamente dando el curso de <em>Introducción a la programación web.</em>
        </p>
        <p style={{fontSize: '1.3em'}}>
            Te invito a usar nuestro humilde sidebar para navegar por los recursos disponibles.
        </p>
    </section>
);
