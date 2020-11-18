import React, { useState,useEffect } from 'react'
import './Section.css'

function SectionStudent() {

    const [labsStudent,setLabsStudent]=useState([])

    useEffect(()=>{
        setLabsStudent([
            {
                id:1,
                img:"/img/lab-2.png",
                title:"Access a human capital pool for pharmaceutical and highly-regulated industries",
                text:"Receive training in Virtual, regulated labs for industry validate roles"
            },
            {
                id:2,
                img:"/img/lab-3.png",
                title:"Individual Learning is a breeze with VirtuPharma!",
                text:"Gain Individual ,virtual access to scientific instumentaitons and your complex instuments"
            },
            {
                id:3,
                img:"/img/lab-4.png",
                title:"VirtuPharma offers a market platform that trains and connects top sceintists in real-time",
                text:"Benefit from real-time remote access to tricks and tipsfor lab job skills taught by the expers"
            }
        ])
    },[])

    return ( 

            <section className="student-section">
                <div className="container-fluid px-6">
                    <div className="row student-section-wrapper">
                        <div className="col-lg-7 col-md-12">
                            <div className="row d-flex align-items-center justify-content-center text-center mx-auto student-section-title">
                               {/*  <h3>Acquire Relevant Lab skills for your job by<br/>training in cloud-based virtual<br/>laboratoires</h3> */}
                               <h3>We are Students’ Favourite</h3>
                            </div>
                            <div className="row">
                                {labsStudent.map(el=>
                                    (
                                        <div className="col-lg-4 col-md-10 mx-auto">
                                            <div className="student__item mb-4">
                                                <div className="student__item-img">
                                                    <img src={el.img} />
                                                </div>
                                                <h3>{el.title}</h3>
                                                <p>{el.text}</p>
                                            </div>
                                        </div>     
                                    ))}  
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 student_img">
                             <img src="assets/img/students.jpg" className="w-100" />
                        </div>
                    </div>
                </div>
            </section> 

    )
}

export default SectionStudent
