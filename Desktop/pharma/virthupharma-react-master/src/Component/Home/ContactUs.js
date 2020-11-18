import React from 'react'

function ContactUs() {
  return (
     <section className="home_contact"> 
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                  <div className="section-title margin-bottom-60 md-mr-bottom-35">
                      <h2 className="title-h2 text-center">Contact Us</h2>
                  </div>
              </div>
          </div>
           <div className="contact_wrapper row justify-content-between text-center" style={{ width: '70%', margin: 'auto' }}>
              <div className="col-lg-6 col-md-8 col-sm-10 mb-md-5 mb-sm-5 mx-auto">
                  <div className="home_contact_info-item">
                        <h3>Product Support</h3>
                        <span><strong>Monday - Friday :</strong> 7:00am to 5:00pm PST</span>
                        <span><strong>Saturday : </strong> 8:00am to 2:00pm PST</span>
                        <span><strong>Tel : </strong> +61 8052 3988</span>
                        <span><strong>Email : </strong> info@virtupharma.com.au</span>
                    </div>
              </div>

              <div className="col-lg-6 col-md-8 col-sm-10  mx-auto">
                   <div className="home_contact_info-item">
                        <h3>Sales Support</h3>
                        <span><strong>Monday - Friday :</strong> 7:00am to 5:00pm PST</span>
                        <span><strong>Saturday : </strong> 8:00am to 2:00pm PST</span>
                        <span><strong>Tel : </strong> +61 8052 3988</span>
                        <span><strong>Email : </strong> info@virtupharma.com.au</span>
                    </div>
              </div>
                
            </div> 
          </div>
      </section>
  )
}

export default ContactUs
