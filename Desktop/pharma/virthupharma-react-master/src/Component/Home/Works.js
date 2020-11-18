import React, { useEffect, useState } from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {GiMaterialsScience} from 'react-icons/gi'
import {IoIosGitNetwork} from 'react-icons/io'
import './Section.css'

function Works() {

  const [works,setWorks]=useState([])

  useEffect(()=>{
    setWorks([
      {id:1,icon:'/img/exp-7.svg', text:"Hire Or lease your lab Expertise"},
      {id:2,icon:'/img/exp-6.svg', text:"Data Treatment"},
      {id:3,icon:'/img/exp-2.svg', text:"Industry Experience"},
      {id:4,icon:'/img/exp-1.svg', text:"Instrumental Training"},
      {id:5,icon:'/img/exp-5.svg', text:"Data Analysis"},
      {id:6,icon:'/img/exp-4.svg', text:"Data Treatment"},
      {id:7,icon:'/img/exp-3.svg', text:"Regulatory Labs "},
      {id:8,icon:'/img/exp-8.svg', text:"Clinical Trials"}
    ])
  },[])

  return (
    <section className="works">
        <div className="container">
          <div className="row mb-3">
            <h1 className="col-10 mx-auto text-center">Work With VirtuPharma Labs</h1>
          </div>
          <div className="row">
              {works.map(el=>{
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={el.id}>
                    <div className="work_item d-flex flex-column text-center justify-content-center align-items-center">
                        <span className="work_icon"><img src={el.icon} alt="icon-img"/></span>
                        <h4>{el.text}</h4>
                    </div>
                  </div>
                )
              })}

          </div>
        </div>
    </section>
  )
}

export default Works
