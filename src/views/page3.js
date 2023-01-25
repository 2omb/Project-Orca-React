import React from 'react'

import { Helmet } from 'react-helmet'

import './page3.css'

const Page3 = (props) => {
  return (
    <div className="page3-container">
      <Helmet>
        <title>Page3 - Project Orca</title>
        <meta property="og:title" content="Page3 - Project Orca" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d57b92ae-6993-491a-aa32-6c0e4ea8552c/48891d20-5884-4fe1-879f-49de4fcb3755?org_if_sml=1"
        />
      </Helmet>
    </div>
  )
}

export default Page3
