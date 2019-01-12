import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Sidebar from '../Sidebar';
import Footer from './Footer';
import Header from './Header';
import '../../commons/all.sass';

class Layout extends Component {
    state = { showSideMenu: false };

    setSideMenu(value) {
        this.setState({ showSideMenu: value });
    }

    render() {
        const { children } = this.props;
        const { showSideMenu } = this.state;
        return (
            <StaticQuery
                query={graphql`
                    query HeadingQuery {
                        site {
                            siteMetadata {
                                title,
                                description,
                                keywords,
                                host
                            }
                        }
                    }
                `}
                render={({ site: { siteMetadata } }) => (
                    <>
                        <Sidebar show={showSideMenu} onHideSideMenu={() => this.setSideMenu(false)} />
                        <div className="body">
                            <Helmet title={siteMetadata.title}>
                                <html lang="es" />
                                <meta name='description' content={siteMetadata.description} />
                                <meta name='keywords' content={siteMetadata.keywords} />
                                <meta property="og:title" content={siteMetadata.title} />
                                <meta property="og:type" content="website" />
                                <meta property="og:url" content={siteMetadata.host} />
                                <meta property="og:description" content={siteMetadata.description} />
                                <meta name="twitter:title" content={siteMetadata.title} />
                                <meta name="twitter:description" content={siteMetadata.description} />
                                <meta name="twitter:card" content="summary" />
                            </Helmet>

                            <Header onShowSideMenu={() => this.setSideMenu(true)} />
                            <main>
                                {children}
                            </main>
                            <Footer />
                        </div>
                    </>
                )}
            />
        );
    }
}

export default Layout;
