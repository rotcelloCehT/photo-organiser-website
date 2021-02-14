import React from 'react'
import Footer from '../components/footer' // (../) means go up one directory
import NavBar from '../components/NavBar/Navbar'
// import NavbarLinks from "../components/NavBar/NavbarLinks"
import layoutStyles from './layout.module.scss'

function Layout(props){ // props is what's inside the layout tags.
    return(
        <div className={layoutStyles.page}>
            <NavBar />
            <div className={layoutStyles.mainContainer}>
                {/* USE CAMEL CASE IN JS FILE TO REFERENCE SCSS WITH "-" */}
                <div className={layoutStyles.content}> 
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
        
    )
}
export default Layout