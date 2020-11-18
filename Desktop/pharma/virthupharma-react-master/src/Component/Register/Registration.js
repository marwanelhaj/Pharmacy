import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {
    return (
        <main>
            <section className="home-banner position-relative">
                <img src="img/home-banner-bg.png" alt className="home-bg img-fluid h-100" />
                <div className="home-img">
                    <img src="img/home-img.png" alt className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
                <div className="home-text position-relative">
                    <h1>World’s first cloud-based science
                    laboratories within regulatory
        accreditation</h1>
                </div>
                <div className="position-absolute registration text-center text-white">
                    <h2>REGISTER</h2>
                    <p className="mb-5">
                        Experts can share their knowledge and
        <br />
        Learners can gain new skills
      </p>
                    <div className="d-flex reg-buttons align-items-center">
                        <Link className="blue-btn transparent" to="/register/learner">Learner / Client</Link>
                        <div className="reg-or"><b>or</b></div>
                        <Link className="blue-btn" to="/register">Expert</Link>
                        <div className="reg-or"><b>or</b></div>
                        <Link className="blue-btn transparent" to="/labs/create">Add Your Lab</Link>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Registration
