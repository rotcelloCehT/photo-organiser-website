import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout' // (../) means go up one directory
import Head from '../components/head'
import "../styles/index.scss"

function IndexPage(){
  return(
    <Layout>
      <Head title="Home"/>
      <div className="background">
        <div className="overlay">
          <div className="block">
              {/* <div className="title">
                <h1>Volto Organiser</h1>
              </div>
              <div className="intro">
                <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
              </div> */}
              <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
                <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
                <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
                <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
                <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
                <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
                <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
                <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
                <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
                <p>
                  Volto Organiser allows you to easily organise your photos into folders
                  with the click of a button. Simply connect the external storage device and click
                  organise.
                </p>
              <div className="clicks">
                <button className="downloadButton">
                  <div></div>
                </button>
                <button id="learn-button">
                  <div></div>
                </button>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage