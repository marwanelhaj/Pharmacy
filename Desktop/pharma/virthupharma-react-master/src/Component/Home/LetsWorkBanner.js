import React from 'react'

function LetsWorkBanner() {
  return (
    <section className="home-register position-relative home-register-1">
        <img src="img/register-bg.png" style={{ backgroundColor: '#ECECEC' }} alt className="w-100 img-fluid register-bg" />
        <div className="d-flex align-items-center justify-content-between flex-md-row flex-column text-md-left text-center home-register-content">
            <h3 className="title-h3 text-white">Are you a scientist looking for partnering opportunities?</h3>
            <a href="/register" className="blue-btn">Let's Work Together</a>
        </div>
    </section>
  )
}

export default LetsWorkBanner
