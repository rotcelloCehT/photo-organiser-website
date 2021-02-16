import React from 'react';
import Layout from '../components/layout' // (../) means go up one directory
import Head from '../components/head'

import aboutStyles from './about.module.scss'

function AboutPage(){
    return(
        <div>
            <Layout>
            <Head title="About"/>
            <h1 className={aboutStyles.about}>About</h1>
            <p className={aboutStyles.info}>Blog website created using HTML, CSS, React and Gatsby</p>
            <a className={aboutStyles.contact} href="mailto:anthonyradin123@gmail.com">Contact Me</a>
            </Layout>
        </div>
    )
}

export default AboutPage