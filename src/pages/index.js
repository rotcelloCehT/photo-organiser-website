import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import leftImage from "../images/photo-camera.svg"
import rightImage from "../images/photo-jump.svg"
import windows from "../images/windows.svg"
import apple from "../images/apple.svg"
import folder from "../images/folder.svg"


import Layout from '../components/layout' // (../) means go up one directory
import Head from '../components/head'
import "../styles/index.scss"

function IndexPage(){

  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {extension: {regex: "/(svg)/"}, relativeDirectory: {eq: "images"}}) {
      edges {
        node {
          id
          publicURL
          name
          extension
        }
      }
    }
  }
`)



  return(
    <Layout>
      <Head title="Home"/>
        <div className="background">
            <div className="block">
                <div className="title">
                  <h1>Volto Organiser</h1>
                </div>
                <div className="intro">
                  <p>
                    Volto Organiser allows you to easily organise your photos into folders
                    with the click of a button. Simply connect the external storage device and click
                    organise.
                  </p>
                </div>
                
                <div className="clicks">
                  <div className="header-button">
                    <button>
                      <div></div>
                    </button>
                  </div>
                  <div className="header-button learn-button">
                    <button>
                      <div></div>
                    </button>
                  </div>
                </div>
                <div className="header-images">
                  <div className="header-left">
                    <img src={leftImage} alt="photo-camera"/>
                  </div>
                  <div className="header-right">
                    <img src={rightImage} alt="photo-jump"/>
                  </div>
                </div>
            </div>
        </div>

        <div className="banner">
          <h1>Supported on Mac OS and Windows</h1>
          <div className="banner-left">
            <img src={apple} alt="photo-apple"/>
          </div>
          <div className="banner-right">
            <img src={windows} alt="photo-windows"/>
          </div>
        </div>

        <div className="info-block">
          <div className="info-image">
            <img src={folder} alt="photo-info"/>
          </div>
          <div className="info-card">
              <h2>WHY VOLTO</h2>
              <h1>Organise photos pricessely and efficiently</h1>
              <p>With Volto, you can spend less time organising photos and more time taking them.
                Whether you are regularly uploading photos and organising them or your photos folder
                has always been a mess, Volto will organise them with the click of a button.
              </p>
          </div>

        </div>

    </Layout>
  )
}

export default IndexPage