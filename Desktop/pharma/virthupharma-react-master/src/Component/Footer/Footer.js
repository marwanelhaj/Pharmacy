import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="position-relative" id="footer" style={{ paddingTop: '0px', marginTop: '0px', backgroundColor: '#240F62', color: 'gray', display: 'flex', flexDirection: 'column' }}>
            <div id='contact' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%', margin: 'auto', marginTop: '50px', marginBottom: '40px' }}>
                <h2 className='title-h2' style={{ color: 'white', fontSize: '23px', marginBottom: '30px' }}>Get in touch</h2>
                <div style={{ marginBottom: '40px', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <input style={{ backgroundColor: 'transparent', color: 'white', fontSize: '17px', border: 'none', borderBottom: '2px solid gray', width: '48%', paddingBottom: '15px' }} placeholder='Your Message...'></input>
                    <input style={{ backgroundColor: 'transparent', color: 'white', fontSize: '17px', border: 'none', borderBottom: '2px solid gray', width: '48%', paddingBottom: '15px' }} placeholder='Your Message...'></input>
                </div>
                <input style={{ marginBottom: '30px', backgroundColor: 'transparent', color: 'white', fontSize: '17px', border: 'none', borderBottom: '2px solid gray', width: '100%', paddingBottom: '15px' }} placeholder='Your Message...'></input>
                <button style={{ color: 'gray', backgroundColor: 'transparent', border: '1px solid gray', padding: '10px 60px', borderRadius: '5px', fontWeight: 'bold', fontSize: '17px' }}>Get in touch</button>
            </div>
            <div>
                
                <div className="containe footer" style={{ backgroundColor: '#240F62', color: '#f5f5f5' }}>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 mx-auto text-center mb-4">
                            <img src="img/footer/logo.png" width={197} className="mx-auto text-center"  />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mx-auto mb-4">
                            <ul className="block-1" style={{ color: 'gray' }}> 
                                <li style={{ color: 'gray' }}><Link to="/" style={{ color: '#f5f5f5' }}>VirtuMarket</Link></li>
                                <li style={{ color: 'gray' }}><Link to="/privacy" style={{ color: '#f5f5f5' }}>Privacy Policy</Link></li>
                                <li style={{ color: 'gray' }}><Link to="/terms" style={{ color: '#f5f5f5' }}>Terms and Conditions</Link></li>
                                <li style={{ color: 'gray' }}>
                                    <Link to="/login" style={{ color: '#f5f5f5' }}>Login</Link>
                                    {`  /  `}
                                    <Link to="/registration" style={{ color: '#f5f5f5' }}>Register</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mx-auto mb-4">
                            <div className="block-2" style={{ color: '#f5f5f5' }}>
                                <div className="d-flex align-items-center">
                                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="31.197" height="31.197" viewBox="0 0 31.197 31.197" fill="#352072" fillRule="evenodd">
                                    <path d="M0,0H31.2V31.2H0Z" fill="none" fillRule="evenodd" />
                                    <path d="M25.4,4H4.6A2.607,2.607,0,0,0,2,6.6V22.2a2.607,2.607,0,0,0,2.6,2.6H25.4A2.607,2.607,0,0,0,28,22.2V6.6A2.607,2.607,0,0,0,25.4,4Zm-.52,5.524-8.5,5.316a2.575,2.575,0,0,1-2.756,0L5.12,9.524A1.1,1.1,0,1,1,6.29,7.653L15,13.1l8.709-5.446a1.1,1.1,0,1,1,1.17,1.872Z" transform="translate(0.6 1.2)" />
                                </svg>*/}
                                    <a href="mailto:info@virtupharma.com.au" style={{ color: '#f5f5f5' , fontFamily:"Lato-Regular" }}>info@virtupharma.com.au</a>
                                </div>
                                <div className="d-flex align-items-center">
                                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="22.903" height="22.889" viewBox="0 0 21.903 21.889" fill="#352072" style={{ width: 31 }}>
                                    <g transform="translate(0 0)">
                                        <g transform="translate(0 0)">
                                            <path d="M21.892,17.462a1.059,1.059,0,0,1-.325.927L18.484,21.45a1.736,1.736,0,0,1-.545.394,2.252,2.252,0,0,1-.661.209q-.023,0-.139.012t-.3.012a10.689,10.689,0,0,1-1.426-.151A10.83,10.83,0,0,1,13,21.184,20.241,20.241,0,0,1,9.766,19.41a24.116,24.116,0,0,1-3.849-3.246A25.408,25.408,0,0,1,3.227,13.1a21.807,21.807,0,0,1-1.716-2.7A14.549,14.549,0,0,1,.537,8.153,11.933,11.933,0,0,1,.1,6.414,5.743,5.743,0,0,1,0,5.266Q.027,4.849.027,4.8a2.254,2.254,0,0,1,.209-.661A1.738,1.738,0,0,1,.63,3.6L3.714.513A1.021,1.021,0,0,1,4.456.188a.865.865,0,0,1,.533.174,1.612,1.612,0,0,1,.394.429L7.864,5.5a1.128,1.128,0,0,1,.116.812,1.445,1.445,0,0,1-.394.742L6.45,8.188a.387.387,0,0,0-.081.151.572.572,0,0,0-.035.174,4.187,4.187,0,0,0,.417,1.113,10.217,10.217,0,0,0,.858,1.356,15.061,15.061,0,0,0,1.646,1.843,15.359,15.359,0,0,0,1.855,1.658,10.712,10.712,0,0,0,1.356.869,3.605,3.605,0,0,0,.835.336l.29.058a.553.553,0,0,0,.151-.035.387.387,0,0,0,.151-.081l1.322-1.345a1.42,1.42,0,0,1,.974-.371,1.212,1.212,0,0,1,.626.139h.023L21.313,16.7A1.166,1.166,0,0,1,21.892,17.462Z" transform="translate(0 -0.188)" />
                                        </g>
                                    </g>
                                </svg>*/}
                                    <a href="tel:+61 2 8052 3988" style={{ color: '#f5f5f5',fontFamily:"Lato-Regular" }}>+61 2 8052 3988 </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mx-auto mb-4">
                            <div className="block-3">
                                <h2 className="title-h2 mb-2" style={{ color: '#f5f5f5' ,fontFamily:"Lato-Regular" }}>Subscribe to our newsletter </h2>
                                <p>Receive exclusive offers and the latest news on our products</p>
                                <form style={{ color: 'gray' }}>
                                    <div className="form-group d-flex justify-content-between mb-0">
                                        <input type="email" className="form-control" placeholder="Email" id="subscribeInput" />
                                        <button id="subscribe" className="blue-btn">Subscribe</button>
                                    </div>
                                    <div id="subscribeError" className="text-danger small" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-copyright position-relative" id="f" style={{ backgroundColor: '#000' }}>
                    <div className="footer-copyright-content d-flex justify-content-between align-items-center flex-wrap" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ color: 'gray' }}>© 2020 - VirtuPharma. All rights reserved.</div>
                        <div className="footer-social-logos" style={{ color: 'gray', width: '15%', display: 'flex', justifyContent: 'space-between' }}>
                            <a href="https://www.facebook.com/virtupharma/" aria-label="fb icon" target="_blank" style={{ color: 'gray' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11.172" height="22.345" viewBox="0 0 11.172 22.345" fill="gray" fillRule="evenodd" style={{ color: 'gray' }}>
                                    <g transform="translate(0 0)" style={{ color: 'gray' }}>
                                        <path d="M336.621,7261.344v-10.056h3.053l.5-4.469h-3.551v-2.176c0-1.151.029-2.293,1.637-2.293h1.629v-3.194a18.16,18.16,0,0,0-2.814-.157c-2.956,0-4.806,1.852-4.806,5.251v2.569H329v4.469h3.266v10.056Z" transform="translate(-329 -7239)" style={{ color: 'gray' }} />
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/virtupharma/" aria-label="linkedin icon" target="_blank" style={{ color: 'gray' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" fill="#352072" id="Capa_1" x="0px" y="0px" width="20.225" viewBox="0 0 430.117 430.117" style={{ enableBackground: 'new 0 0 430.117 430.117', fill: 'gray' }} xmlSpace="preserve"><g>
                                    <g>
                                        <path id="LinkedIn" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z" className="active-path" style={{ color: 'gray', fill: 'gray' }} />
                                    </g>
                                </g> </svg>
                            </a>
                            <a href="https://twitter.com/PharmaVirtu" aria-label="twitter icon" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27.391" height="21.914" viewBox="0 0 27.391 21.914" fill="gray" fillRule="evenodd">
                                    <g transform="translate(0 0)">
                                        <path d="M12.615,7382.914a15.753,15.753,0,0,0,15.99-15.745c0-.239,0-.479-.016-.715a11.361,11.361,0,0,0,2.8-2.863,11.341,11.341,0,0,1-3.227.87,5.575,5.575,0,0,0,2.471-3.062,11.318,11.318,0,0,1-3.569,1.345,5.688,5.688,0,0,0-7.952-.241,5.485,5.485,0,0,0-1.626,5.287,16.047,16.047,0,0,1-11.582-5.781,5.483,5.483,0,0,0,1.741,7.383A5.615,5.615,0,0,1,5.1,7368.7v.068A5.558,5.558,0,0,0,9.6,7374.2a5.65,5.65,0,0,1-2.536.094,5.618,5.618,0,0,0,5.25,3.846,11.4,11.4,0,0,1-6.979,2.372,12.036,12.036,0,0,1-1.338-.08,16.1,16.1,0,0,0,8.615,2.481" transform="translate(-4 -7361)" />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        {/* removed <div className="p-0">
                      <a href="https://aist.global/en" target="_blank" className="aist-block">
                          <span>Design &  Development  by</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="81.82" height="27.544" viewBox="0 0 81.82 27.544">
                              <g id="Group_571" data-name="Group 571" transform="translate(-12.993 -14.011)">
                                  <g id="Shape_8" data-name="Shape 8" transform="translate(12.993 14.011)">
                                      <path id="Shape_8-2" data-name="Shape 8"
                                          d="M26.889.01H1.854A1.541,1.541,0,0,0,.04,1.464c-.091,1.68,0,23.615,0,23.615S0,26.669,1.31,26.714s6.349,0,6.349,0Z"
                                          transform="translate(0 0)" fill="#fff" fill-rule="evenodd" />
                                  </g>
                                  <g id="Shape_9" data-name="Shape 9" transform="translate(32.082 19.289)">
                                      <path id="Shape_9-2" data-name="Shape 9" d="M8.526,0,0,12.534H8.708Z" fill="#fff"
                                          fill-rule="evenodd" />
                                  </g>
                                  <g id="Shape_10" data-name="Shape 10" transform="translate(27.349 34.367)">
                                      <path id="Shape_10-2" data-name="Shape 10"
                                          d="M2.919,0S.56,3.306.379,3.815A7.044,7.044,0,0,0,.016,5.268a6.9,6.9,0,0,0,0,.908l13.062.182s.508-.182.544-2,0-4.36,0-4.36Z"
                                          transform="translate(0)" fill="#fff" fill-rule="evenodd" />
                                  </g>
                                  <g id="Shape_11" data-name="Shape 11" transform="translate(44.179 14.255)">
                                      <path id="Shape_11-2" data-name="Shape 11" d="M0,26.68,4.734,0H8.32L3.729,26.823Z"
                                          fill="#fff" fill-rule="evenodd" />
                                  </g>
                                  <g id="Shape_12" data-name="Shape 12" transform="translate(54.65 14.255)">
                                      <path id="Shape_12-2" data-name="Shape 12"
                                          d="M1,22.377a7.444,7.444,0,0,0,2.869,1.434,13.556,13.556,0,0,0,4.447,0A6.04,6.04,0,0,0,10.471,21.8c.258-.545.4-3.27-.287-4.16A35.774,35.774,0,0,0,5.738,13.77c-2.18-1.779-3.672-4.332-3.729-5.594S2.094,3.5,3.3,2.3A7.139,7.139,0,0,1,8.32,0H40.163L39.59,3.3H30.84L26.823,26.823H23.237L27.254,3.443,8.32,3.156a3.111,3.111,0,0,0-1.721,1,3.989,3.989,0,0,0-.861,3.012,4.232,4.232,0,0,0,1.721,3.012A39.491,39.491,0,0,1,10.9,13.053c.832.832,2.831,2.945,3.156,4.16a11.654,11.654,0,0,1,.287,4.447A7.036,7.036,0,0,1,12.336,25.1a8.978,8.978,0,0,1-3.729,1.865,12.567,12.567,0,0,1-5.02.143A12.174,12.174,0,0,1,0,25.963Z"
                                          fill="#fff" fill-rule="evenodd" />
                                  </g>
                              </g>
                          </svg>
                      </a>
                  </div> */}
                    </div>
                    <img src="/img/footer-bg.png" alt className="img-fluid w-100 footer-bg" />
                </div>

            </div>
        </footer>

    )
}

export default Footer
