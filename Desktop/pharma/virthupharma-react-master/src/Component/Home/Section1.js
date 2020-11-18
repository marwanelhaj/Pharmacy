import React  from 'react'
import {HiOutlineChevronDown} from 'react-icons/hi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Section.css'

function Section1() {

    const settings = {
        dots: false,
        infinite: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        arrows:false
      }; 

    return (

        <section className="home-banner home_page position-relative" style={{ marginTop: '0px' }}>
            {/*<img src="img/home-banner-bg.png" alt className="home-bg img-fluid h-100" />*/}
            
            <div className="home-img">
                <video autoPlay muted loop id="myVideo" className="img-fluid w-100 h-100 object-fit-cover" style={{ position: 'relative', margin: '0px',zIndex:10 }}>
                 <source src="assets/video/microscope.mp4" type="video/mp4" />
                </video>
            </div>
            
            
            <div className="home-text section-1-head" style={{height:"100vh"}} > 
                <h1>World’s first cloud-based science laboratories </h1>
                <div className="d-flex align-items-center flex-column" style={{position:"relative"}}>
                <div className="slider_text" > 
                    <h1 className="second_title">
                        <span className="first">Made for </span>
                        <Slider {...settings}>
                            <span>LEARNING</span>
                            <span>SHARING{" "}</span>
                            <span>&nbsp;&nbsp;&nbsp;TEAMWORK</span>
                        </Slider>
                    </h1>
                </div>
                   
                <a className="down_icon" href="#section-3" style={{color:'white',display:"inline-block"}}><HiOutlineChevronDown /></a>
                </div>
            </div>
            
             
        </section>


    )
}

export default Section1
