import React from 'react'

import { Helmet } from 'react-helmet'

import './retry.css'

const Retry = (props) => {
  return (
    <div className="retry-container">
      <Helmet>
        <title>Retry - Project Orca</title>
        <meta property="og:title" content="Retry - Project Orca" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d57b92ae-6993-491a-aa32-6c0e4ea8552c/48891d20-5884-4fe1-879f-49de4fcb3755?org_if_sml=1"
        />
      </Helmet>
      <div className="retry-container1">
        <span className="retry-text">Text</span>
        <span className="retry-text1">Text</span>
        <span className="retry-text2">Text</span>
        <button className="button">Button</button>
      </div>
    </div>
  )
}

export default Retry
