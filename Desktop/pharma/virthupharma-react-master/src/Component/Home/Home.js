import React from 'react' 
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4' 
import SectionStudent from './SectionStudent'
import './Section.css'
import Works from './Works'
import OurPartners from './OurPartners'
import ContactUs from './ContactUs'
import LetsWorkBanner from './LetsWorkBanner'
import OurProducts from './OurProducts'
import Showcase from './Showcase'
import DoorOpen from './DoorOpen'


function Home() {

    return (
        <main style={{ borderBottom: '0px'  }}>
            <div className="modal" id="messageModal">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body text-center">
                            <h4 className="modal-title text-center title-h2">Thank you, we received your message and will be in touch with you shortly.</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" width="100px" className="pt-3"><g>
                                <g>
                                    <g>
                                        <path d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.332,26.629,74.98,74.98C26.629,123.332,0,187.62,0,256    s26.629,132.667,74.98,181.019C123.332,485.371,187.62,512,256,512s132.667-26.629,181.019-74.98    C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M378.306,195.073L235.241,338.139    c-2.929,2.929-6.768,4.393-10.606,4.393c-3.839,0-7.678-1.464-10.607-4.393l-80.334-80.333c-5.858-5.857-5.858-15.354,0-21.213    c5.857-5.858,15.355-5.858,21.213,0l69.728,69.727l132.458-132.46c5.857-5.858,15.355-5.858,21.213,0    C384.164,179.718,384.164,189.215,378.306,195.073z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#05CAFE" />
                                    </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" id="messageModal">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body text-center">
                            <h4 className="modal-title text-center title-h2">Thank you, we received your message and will be in touch with you shortly.</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" width="100px" className="pt-3"><g>
                                <g>
                                    <g>
                                        <path d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.332,26.629,74.98,74.98C26.629,123.332,0,187.62,0,256    s26.629,132.667,74.98,181.019C123.332,485.371,187.62,512,256,512s132.667-26.629,181.019-74.98    C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M378.306,195.073L235.241,338.139    c-2.929,2.929-6.768,4.393-10.606,4.393c-3.839,0-7.678-1.464-10.607-4.393l-80.334-80.333c-5.858-5.857-5.858-15.354,0-21.213    c5.857-5.858,15.355-5.858,21.213,0l69.728,69.727l132.458-132.46c5.857-5.858,15.355-5.858,21.213,0    C384.164,179.718,384.164,189.215,378.306,195.073z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#05CAFE" />
                                    </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" id="video-modal">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body text-center">
                            <div className="video position-relative">
                                <video loop playsInline className="img-fluid" src="/videos/multiple-platforms-supported.mp4" type="video/mp4" />
                                <span className="video-play"> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*<Section1 /> */}
            <Section1/>
            <Section2 />
            <Section3 />
            <Section4 />  
            <OurProducts />
            <Showcase />
            <SectionStudent />
            <LetsWorkBanner />
            <DoorOpen />
            <Works />
            <OurPartners />
            <ContactUs />
           

        </main>


    )
}

export default Home
