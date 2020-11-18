import React from 'react'
import './Section.css'

function Section2() {
    return (
        <section className="section-2" id="section-2">
            <div className="container">
                <div className="row section-2-wrapper">
                    <div className="col-lg-6 col-md-12 mx-auto mb-md-6 upper_div">
                        <video controls loop className="h-100" style={{ width: '100%', borderRadius: 0, padding: 10 }}>
                            
                            <source src="assets/video/home_video.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-lg-6 col-md-12 mx-auto home_section_text">
                        <h2 className="title-h2" style={{fontSize:"2rem"}} >Our Technology opens new horizons in life sciences training</h2>
                        <p className="virtu-p" >
                            Remotely access and operate cloud-based, complex lab instruments both real and virtual, within Regulatory Labs accreditation, whether you
                             need real-world job skills in life sciences industry, virtual centers around scientific instrumentation,
                              or on-the-job training for candidates,VirtuPharma makes individual learning a breeze
                        </p>
                        <a href="#contact" className="our_btn our_btn_bg">Schedule a demo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2
