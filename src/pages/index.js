import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import leftImage from "../images/photo-camera.svg"
import rightImage from "../images/photo-jump.svg"


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

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  hey')
console.log(data.allFile.edges[0].node.publicURL)




  return(
    <Layout>
      <Head title="Home"/>
      <div className="background">
        <div className="overlay">
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
      </div>
    </Layout>
  )
}

export default IndexPage