import React from 'react'

import { Helmet } from 'react-helmet'

import './page1.css'

const Page1 = (props) => {
  return (
    <div className="page1-container">
      <Helmet>
        <title>Page1 - Project Orca</title>
        <meta property="og:title" content="Page1 - Project Orca" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d57b92ae-6993-491a-aa32-6c0e4ea8552c/48891d20-5884-4fe1-879f-49de4fcb3755?org_if_sml=1"
        />
      </Helmet>
      <div className="page1-banner">
        <h1 className="page1-text">Our Mission</h1>
        <span className="page1-text1">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
              dignissim tortor. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi
              ut rhoncus. Integer in dignissim tortor. Sed non volutpat turpis.
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim ortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <button className="page1-button button">Read More</button>
      </div>
    </div>
  )
}

export default Page1
