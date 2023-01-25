import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Project Orca</title>
        <meta property="og:title" content="Project Orca" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d57b92ae-6993-491a-aa32-6c0e4ea8552c/48891d20-5884-4fe1-879f-49de4fcb3755?org_if_sml=1"
        />
      </Helmet>
      <div className="home-gallery-card">
        <img
          alt="image"
          src="/playground_assets/orca%20gold-1500w.png"
          loading="eager"
          className="home-image"
        />
        <Link to="/page1" name="enter" className="home-navlink button">
          Agree &amp; Enter
        </Link>
        <h3 className="home-heading">
          Matrix Money Team brings a fresh take on Defi as a service. Join the
          pod, and play with the whales.
        </h3>
        <h2 className="home-heading1">Project Orca</h2>
        <span className="home-text">
          Never invest more than you can lose - you alone are responsible for
          your investment. Matrix money LLC. is NOT responsible for any losses
          or changes in token price or any lost funds due to smart contract
          errors or exploits.
        </span>
      </div>
    </div>
  )
}

export default Home
