import React from 'react'
import Iframe from 'react-iframe'

function Showcase() {
   
  return (
    <section className="showcase">
      <div className="container">
        <div className="row">
          <div className="col mx-auto text-center">
          <h2 className="title-h2 text-center">See Our Labs in action</h2>
          </div>
        </div>
        <div className="row">
          <div className="col showcase_wrapper">
          <img src="img/clay-macbook-pro-15-with-touch-bar-front-view-mockup.png" alt=""/>
          <iframe  width="auto" height="100%"
            src="https://virtupharmawebglbuilds.s3-ap-southeast-2.amazonaws.com/hplc_uv_pda/index.html" className="iframe"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
