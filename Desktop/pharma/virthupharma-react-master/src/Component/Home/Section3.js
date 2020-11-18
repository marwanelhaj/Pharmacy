import React from 'react'
import './Section.css'


function Section3() {
    return (
        
        <section className="section-3" id="section-3" style={{ backgroundImage: 'url(img/technology/bg12.png)' }}>
            <div className="container">
                <div className="row" style={{transform:"translateY(5rem)"}}>
                    <div className="col-lg-5 col-md-12 mx-auto home_section_text mb-md-6 upper_div">
                        <h2 className="title-h2" >What Sets us Part ?</h2>
                        <p className="virtu-p" style={{color:"#B1B1B1",marginBottom:"2rem"}} >
                        VirthuPharma uses patented technology to deliver a complete lab experience remotely. Do you Specialize in Complex Machines ?
                            the VirthuPharma Lab is the perfect place to sell skills and knowledge. Our Instruments are great for education and teaching. Own 
                            your complex Instruments. join us today and explore our excellent academic partnership options designed to bring experts and learners together
                        </p>
                        <a href="#contact" className="our_btn">Click To Learn More</a>
                    </div>
                    <div className="col-lg-7 col-md-12 mx-auto w-100" >
                    <video className="video_wrapper" autoPlay loop style={{ width: '100%', borderRadius: 10, 
                        background: 'url(img/clay-macbook-pro-15-with-touch-bar-front-view-mockup.png) center/cover ',
                         backgroundSize: '100% 100%' }}>
                            <source src="img/Video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section3
