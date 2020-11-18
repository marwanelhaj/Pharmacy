import React from 'react'
import {Link} from 'react-router-dom'

function OurProducts() {
  return (
    <section className="our_products" id="products">
        <div className="container">
            <div className="row mb-4">
                <div className="col">
                    <h1 className="text-capitalize text-center text-white mb-2">Our Products</h1>
                    <h5 className="text-center text-white">PCT/AU2020/050611</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12 product_item"> 
                    <div className="product_item-link mb-4">
                        <Link to="/registration"  >
                            <img src="img/prod-11.png" alt className="img-fluid w-100  object-fit-cover" />
                        </Link>
                    </div>
                    <div className="product-item-info">
                        <h1 className="product-item-title text-white">Virtual Laboratory Centers</h1>
                        <ul>
                            <li > Pharmaceutical Analytical Lab</li>
                            <li > Pathology Lab</li>
                            <li > Diagnostic Lab</li> 
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 product_item">
                    <div className="product_item-link mb-4">
                        <Link to="/registration"  >
                            <img src="img/prod-13.jpg" alt className="img-fluid w-100  object-fit-cover" />
                        </Link>
                    </div> 
                    <div className="product-item-info">
                        <h1 className="product-item-title text-white">Industry Validated Duties</h1>
                        <ul>
                            <li > QC Chemist</li>
                            <li > Lab Technician</li>
                            <li > Pathologist</li>
                            <li > HPLC Analyst</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 product_item">
                    <div className="product_item-link mb-4">
                        <Link to="/registration"  >
                            <img src="img/prod-14.jpg" alt className="img-fluid w-100  object-fit-cover" />
                        </Link>
                    </div> 
                    <div className="product-item-info">
                        <h1 className="product-item-title text-white">Interactive Training Platform</h1>
                        <ul>
                            <li className="mb-2"> If you are a scientist, upload your videos or remotely use our instruments and teach to earn.</li>
                            <li > Upload your scientific papers to our Forum and promote your research</li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurProducts
