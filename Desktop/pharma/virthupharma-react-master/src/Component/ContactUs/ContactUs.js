import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
    return (
            <div>
  <div className="total-content">
    <div className="header-section">
      <div className="info-popup" />
      <div className="info-popup-wrapper">
        <div className="info-popup-content">
          <button type="button" className="info-popup-content_close"><i className="flaticon-close" /></button>
          <div className="row no-gutters">
            <div className="col-lg-7">
              <div className="info-popup-content__img info-popup-content__img--one">
                <img src="assets/img/popup/2.png" alt />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="info-popup-content__text">
                <div className="info-popup-content__img">
                  <img src="assets/img/popup/3.png" alt />
                </div>
                <div className="info-popup-content__text-header">
                  <h5 className="info-popup-content__title">Opening Hours</h5>
                </div>
                <div className="info-popup-content__text-body">
                  <p className="info-popup-content__text-is">moday - sunday</p>
                  <p className="info-popup-content__text-is">8.00 am - 9.00 pm</p>
                </div>
                <div className="info-popup-content__text-footer">
                  <p className="info-popup-content__text-is">02 5555 5555</p>
                  <p className="info-popup-content__text-is">info@virtupharma.com.au</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="location-popup" />
      <div className="location-popup-wrapper">
        <div className="location-popup-content">
          <button type="button" className="location-popup-content_close"><i className="flaticon-close" /></button>
          <div className="row no-gutters">
            <div className="col-lg-7">
              <div id="map-two">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14608.271103099609!2d90.36059233036049!3d23.74496240347118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20map!5e0!3m2!1sen!2sbd!4v1571636420588!5m2!1sen!2sbd" style={{border: 0}} className="total-map" allowFullScreen />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="location-popup-content__text">
                <div className="location-popup-content__img">
                  <img src="assets/img/popup/1.png" alt />
                </div>
                <div className="location-popup-content__text-header">
                  <h5 className="location-popup-content__title">Address</h5>
                </div>
                <div className="location-popup-content__text-body">
                  <span className="location-popup-content__text-is">
                    Sydney, <br /> New South Wales
                  </span>
                </div>
                <div className="btn-wrapper">
                  <button className="boxed-btn" type="button">Open Map</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="message-popup" />
      <div className="message-popup-wrapper">
        <div className="message-popup-content">
          <button type="button" className="message-popup-content_close"><i className="flaticon-close" /></button>
          <div className="row no-gutters">
            <div className="col-lg-7">
              <div className="message-popup-content__img message-popup-content__img--one">
                <img src="assets/img/popup/4.png" alt />
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="message-popup-content__text">
                <div className="info-popup-content__img">
                  <img src="assets/img/popup/5.png" alt />
                </div>
                <div className="message-popup-content__text-header">
                  <h5 className="message-popup-content__title mb-3">
                    You have a question for us?
                  </h5>
                </div>
                <div className="message-popup-content__text-body">
                  <form className="popup-form" action="#">
                    <div className="form-group">
                      <input id="email-two-popup" type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows={1} placeholder="Your Message" defaultValue={""} />
                    </div>
                    <div className="btn-wrapper padding-top-20">
                      <button className="boxed-btn" type="button">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-area navbar-expand-lg nav-style-01 ">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <div className="logo-wrapper d-none d-lg-block">
              <Link to="/" className="logo">
                <img src="assets/img/logo/logo.png" alt="Virtupharma" />
              </Link>
            </div>
            <div className="logo-wrapper d-block d-lg-none">
              <Link to="/" className="logo">
                <img src="assets/img/logo/logo2.png" alt="Virtupharma" />
              </Link>
            </div>
            <div className="mobile-toggler">
              <a data-toggle="modal" data-target="#login-modal" href="#"><i className="flaticon-user-1" /></a>
            </div>
            <button className="navbar-toggler cross-menu" type="button" data-toggle="collapse" data-target="#lifeomic_main_menu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="cross-menu-wrapper">
                <span className="bar1" />
                <span className="bar2" />
                <span className="bar3" />
              </span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="lifeomic_main_menu">
            <ul className="navbar-nav">
              <li><Link to="/">Home</Link>
              </li>
              <li className="menu-item-has-children"><Link to="/products">Products</Link>
                <ul className="sub-menu">
                  <li><Link to="/pharma-lab">Pharma Lab</Link></li>
                  {/*<li><Link to="/med-imaging">Med Imaging</Link></li>*/}
                </ul>
              </li>
              <li><Link to="/jobs">Jobs</Link>
              </li><li><Link to="/news">News</Link>
              </li>
              <li className="current-menu-item"><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div className="nav-right-content">
            <ul>
              <li className="login">
                <a data-toggle="modal" data-target="#login-modal" style={{fontSize: 18, fontWeight: 600}} href="#">Log In /</a>
              </li>
              <li className="singup"><a data-toggle="modal" data-target="#singup-modal" style={{fontSize: 18, fontWeight: 600}} href="#">Register</a>
              </li>
              <li className="search" id="search">
                <i className="flaticon-user" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div className="login-modal modal fade" id="singup-modal" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-custom" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <i className="flaticon-close" />
            </button>
            <div className="login-form-section">
              <div className="container padding-0">
                <div className="row padding-0">
                  <div className="col-md-6 padding-0">
                    <div className="login-section grd-bg">
                      <div className="login-back">
                        <div className="login-content">
                          <h2 className="title">Welcome back </h2>
                          <p>To keep connected with us please login with your personal info
                          </p>
                        </div>
                        <div className="btn-wrapper">
                          <button className="boxed-btn" type="submit"><span>Sign In</span> </button>
                        </div>
                        <div className="img-wrap padding-top-50">
                          <img src="assets/img/signup-login/dfoctor.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="reg-section">
                      <form className="login-form" action="#">
                        <h2 className="title padding-bottom-30">Create account</h2>
                        <div className="form-group">
                          <label htmlFor="name-form">Username or Email</label>
                          <input id="name-form" type="text" className="form-control" placeholder="Username or Email" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email-four">Email</label>
                          <input id="email-four" type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password-four">Password</label>
                          <input id="password-four" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="btn-wrapper">
                          <button className="boxed-btn" type="submit">Sign Up</button>
                        </div>
                        <br />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="login-modal modal fade" id="login-modal" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-custom" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="close style-2" data-dismiss="modal" aria-label="Close">
              <i className="flaticon-close" />
            </button>
            <div className="login-form-section">
              <div className="container padding-0">
                <div className="row padding-0">
                  <div className="col-lg-6 padding-0">
                    <div className="login-section bg-grey">
                      <form className="login-form" action="#">
                        <h2 className="title margin-bottom-35">Log In</h2>
                        <div className="form-group">
                          <label htmlFor="email-three">Username or Email</label>
                          <input id="email-three" type="text" className="form-control" placeholder="Username or Email" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password-three">Password</label>
                          <input id="password-three" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <a href="#" className="forget-btn">Forget password ? </a>
                        <div className="btn-wrapper">
                          <button className="boxed-btn" type="submit"><span>LOG IN</span> </button>
                        </div>
                      </form>
                      <div className="social-icon light-bg">
                        <div className="new-user padding-top-30">
                          <h6>New User ?</h6>
                          <a href="#">Create a new account</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block padding-0">
                    <div className="reg-section bg-grey">
                      <div className="login-back">
                        <div className="img-wrap padding-bottom-50">
                          <img src="assets/img/signup-login/sign-in.png" alt />
                        </div>
                        <div className="login-content">
                          <h4 className="title">Hi Dear ? Sign up to join us</h4>
                        </div>
                        <div className="btn-wrapper ">
                          <button className="boxed-btn" type="submit"><span>SIGN UP</span> </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="breadcrumb-area contact-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-inner dark-blue">
            <h2 className="page-title white-effect">Contact Us</h2>
            <ul className="page-list white-effect">
              <li><Link to="/">Home</Link></li>
              <li className="current">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="contact-info-area padding-top-120 md-pd-top-70">
    <div className="nav-container">
      <div className="row">
        <div className="col-lg-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-left margin-bottom-40 md-mr-bottom-20">
                <h2 className="title">Get in Touch</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 ">
              <div className="contact-info-box">
                <h5 className="title">Sydney</h5>
                <p>Univeristy of Sydney</p>
                <p><strong>Email: </strong>info@virtupharma.com.au</p>
                <p><strong>Phone: </strong>+61 2 8052 3988 </p>
              </div>
            </div>
          </div>
          <div className="row padding-top-45">
            <div className="col-lg-9 col-sm-9">
              <div className="img-wrap text-center text-sm-left">
                <img src="assets/img/contact/bf.jpg" alt />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 border-left pt-5 pt-lg-0">
          <div className="section-title text-left margin-bottom-60 md-mr-bottom-35">
            <h2 className="title">Send Your Message</h2>
          </div>
          <form className="contact-from style-2" id="contact-form" action="mail.php" method="post">
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Fast Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows={4} placeholder="Comment" defaultValue={""} />
            </div>
            <div className="btn-wrapper">
              <button type="submit" className="submit-btn boxed-btn"><span>Send Message</span></button>
            </div>
            <p className="form-messege mb-0" />
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

    )
}

export default ContactUs
