import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { VirtualPharmaContext } from "../../Context/VirtualPharme.Context";


function Header() {
    const { isLogin, userEmail, userInfo, userRole } = useContext(VirtualPharmaContext);
    let fullName = userInfo ? userInfo.first_name + " " + userInfo.last_name : "";

    const signOut = () => {

    }

    return (
        <header>
            <div className="top-header d-md-block d-none" id="app">
                <div className="top-header-content d-flex justify-content-end align-items-center">
                    <div className="top-header-link">
                        <img src="/img/message.svg" alt="message" />
                        <a href="mailto:info@virtupharma.com.au">info@virtupharma.com.au</a>
                    </div>
                    <div className="top-header-link">
                        <img src="/img/phone.svg" alt="phone" />
                        <a href="tel:+61 2 8052 3988">+61 2 8052 3988
        </a>
                    </div>
                    <div className="social-logos">
                        <a href="https://www.facebook.com/virtupharma/" aria-label="facebook logo" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5.587" height="11.174" viewBox="0 0 5.587 11.174" fill="#fff" fillRule="evenodd">
                                <g transform="translate(0 0)">
                                    <path d="M332.811,7250.174v-5.029h1.527l.249-2.234h-1.776v-1.089c0-.575.015-1.146.819-1.146h.814v-1.6a9.031,9.031,0,0,0-1.407-.078,2.3,2.3,0,0,0-2.4,2.626v1.285H329v2.234h1.633v5.029Z" transform="translate(-329 -7239)" />
                                </g>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/virtupharma/" aria-label="linkedin icon" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" fill="#fff" id="Capa_1" x="0px" y="0px" height={12} viewBox="0 0 430.117 430.117" style={{ enableBackground: 'new 0 0 430.117 430.117' }} xmlSpace="preserve"><g>
                                <g>
                                    <path id="LinkedIn" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z" className="active-path" />
                                </g>
                            </g>
                            </svg>
                        </a>
                        <a href="https://twitter.com/PharmaVirtu" aria-label="twitter logo" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.699" height="10.96" viewBox="0 0 13.699 10.959" fill="#fff" fillRule="evenodd">
                                <g transform="translate(0 0)">
                                    <path d="M8.308,7371.959a7.879,7.879,0,0,0,8-7.875c0-.119,0-.239-.008-.357a5.69,5.69,0,0,0,1.4-1.432,5.664,5.664,0,0,1-1.614.435,2.789,2.789,0,0,0,1.236-1.531,5.655,5.655,0,0,1-1.785.672,2.845,2.845,0,0,0-3.977-.12,2.743,2.743,0,0,0-.813,2.644,8.026,8.026,0,0,1-5.792-2.891,2.743,2.743,0,0,0,.871,3.693,2.816,2.816,0,0,1-1.276-.346v.035A2.78,2.78,0,0,0,6.8,7367.6a2.826,2.826,0,0,1-1.268.047,2.808,2.808,0,0,0,2.625,1.922,5.7,5.7,0,0,1-3.49,1.187,5.905,5.905,0,0,1-.669-.04,8.05,8.05,0,0,0,4.308,1.241" transform="translate(-4 -7361)" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-xl bg-white my-navbar">
                <Link className="navbar-brand" to="/" aria-label="logo">
                    <img src="/img/logo.png" alt />
                </Link>
                <button id="nav-icon3" className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href='/#products' className="nav-link">Our Products</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/labs/create">Add Your Lab</Link>
                        </li>
                        {/*<li className="nav-item">
          <Link className="nav-link" to="/virtu-market">VirtuMarket</Link>
        </li>*/}
                        <li className="nav-item">
                            <a href='/#contact' className="nav-link">Contact Us</a>
                        </li>
                        {isLogin ? (
                            <>
                                <li className="nav-item dropdown">
                                    <a id="navbarDropdown" data-toggle="dropdown" data-target="#profileDropDown" className="nav-link dropdown-toggle" href="#" role="button" aria-haspopup="true" aria-expanded="false" v-pre>
                                        {fullName}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" id="profileDropDown">
                                        <Link className="dropdown-item" to="/profile">
                                            Profile
      </Link>
                                        <button className="dropdown-item" onClick={signOut()}>
                                            Logout
          </button>
                                        <form id="logout-form" action="https://virtupharma.com.au/logout" method="POST" style={{ display: 'none' }}>
                                            <input type="hidden" name="_token" defaultValue="t7cn27TO07R0VTwSxbFlNO98eoHdl8FsCluSvMeJ" />                          </form>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className type="button" id="notifDropdown" data-toggle="dropdown" data-target="#notifDrop" aria-haspopup="true" aria-expanded="false" style={{ background: 'transparent', border: 'none', padding: '0 0 0 35px' }}>
                                            <svg version="1.1" id="Capa_1" fill="#6548bc" width="25px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                                <g>
                                                    <g>
                                                        <polygon points="339.392,258.624 512,367.744 512,144.896 		" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <polygon points="0,144.896 0,367.744 172.608,258.624 		" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856
			L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z" />
                                                    </g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                            </svg>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" id="notifDrop">
                                            <p className="dropdown-item" style={{ cursor: 'pointer' }}>You have no
          notifications</p>
                                        </div>
                                    </div>
                                </li>
                            </>) : (
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link pr-1" to="/login">Login </Link> /
                                    <Link className="nav-link pl-1" to="/registration"> Register</Link>
                                </li>
                            )}


                    </ul>
                </div>
            </nav>
        </header>


    )
}

export default Header
