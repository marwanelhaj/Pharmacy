import React from 'react'
import {Link} from 'react-router-dom'

function DoorOpen() {
  return (
    <section className="door_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8  home_section_text door_bg_content">
                <h2 className="text-white">Build your lab and start earning</h2>
                <p className="lead door_bg_text" style={{color:"rgba(255,255,255,.85)",fontSize:"1.1rem"}}> 
                  Are you an inventor with an instrument you want the world to see? Or you are a scientist looking to impart your student? We appreciate your proven scientific knowledge and experience. We offer the best platforms to share them with the world and get paid in the process. <br />
                  Get Started today by joining our community of lab work.</p>
                  <div className="statics d-flex alig-items-center">  
                      <div className="statics_item d-flex flex-column align-items-center justify-content-center">
                          <h1>200+</h1>
                          <p>Students can be individually taught via the platform.</p>
                      </div>
                      <div className="statics_item">
                      <h1>24/7</h1>
                          <p>Access to equipment, resources and online material.</p>
                      </div>
                  </div>

                  <div className="d-flex w-100">
                      <Link to="/registration" > 
                          <button className="btn" style={{ marginRight: '10px', backgroundColor: '#6548BC', border: '1px solid #6548BC', color: 'white' }}>Get Started</button>
                      </Link>
                      <Link to="/login">  
                          <button className="btn" style={{ backgroundColor: 'transparent', border: '1px solid white', color: 'white' }}>Learn More</button>
                      </Link>
                  </div>
              </div>
              <div className="col-lg-6 col-md-4">
                
              </div>
            </div>
          </div>
    </section>
  )
}

export default DoorOpen
