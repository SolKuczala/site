import React from 'react';
import Layout from './src/components/Layout';

export default ({ element, props }) => {
    return (
        <Layout {...props}>
            {element}
        </Layout>
    );
};
