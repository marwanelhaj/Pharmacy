import React from 'react'

function OurPartners() {
  return (
    <section className="our_partners">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="section-title margin-bottom-60 md-mr-bottom-35">
                      <h2 className="title-h2">Our Partners</h2>
                  </div>
              </div>
          </div>
          <div className="row" style={{ width: '70%', margin: 'auto' }}>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="img-wrap">
                        <a ><img src="assets/img/partner/1.png"  alt /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="img-wrap">
                        <a ><img src="assets/img/partner/2.png"  alt /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="img-wrap">
                        <a ><img src="assets/img/partner/3.png"   alt /></a>
                    </div>
                </div> 
            </div>
        </div>  
    </section>
  )
}

export default OurPartners
