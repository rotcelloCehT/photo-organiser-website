import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'
function Footer(){
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
            title
            author
                    
            }
        }
        
        }
    `)
    return(
        <footer className={footerStyles.footer}>
            
            <div className={footerStyles.contact}>
                <p>© Volto Organiser</p>
            </div>

            <div className={footerStyles.footerInfo}>
                <a href="/blog">Blog</a>
            </div>

            <div className={footerStyles.footerInfo}>
                <a href="/about">About</a>
            </div>
            
            <div className={footerStyles.footerInfo}>
                <a className={footerStyles.arrow} href="mailto:anthonyradin123@gmail.com">Email Us</a>
            </div>

            <div className={footerStyles.end}>
                <p>Created by {data.site.siteMetadata.author}, ©2021</p>
            </div>
        </footer>

    )
}
export default Footer