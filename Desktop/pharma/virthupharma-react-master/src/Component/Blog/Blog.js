import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'

function Blog() {
    return (
        <main>
  <div className="blog-page">
    <div className="blog-banner position-relative">
      <a href="https://virtupharma.com.au/forum/teach-labwork">
        <img src="https://virtupharma.com.au/storage/blog/33/1603178623966108012.png" alt="blog" />
      </a><div className="d-flex justify-content-between align-items-sm-center blog-opacity flex-sm-row flex-column align-items-start"><a href="https://virtupharma.com.au/forum/teach-labwork">
          <div>
            <div className="date">Oct 20, 2020</div>
            <div className="title">Yet another successful trial of the VirtuPharma Labs</div>
          </div>
        </a><a href="https://virtupharma.com.au/forum/teach-labwork" className="read-more">Learn more</a>
      </div>
    </div>
    <div className="blog-boxes d-flex align-items-start flex-wrap">
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/remote-lab-work-1">
          <img src="https://virtupharma.com.au/storage/blog/32/1601736484442939545.jpg" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/remote-lab-work-1">
            <div className="date">Oct 03, 2020</div>
            <div className="title">VirtuPharma - Doing Remote Lab Work A Possibility</div>
            <div className="short-desc">Remote-lab-work</div>
          </a><a href="https://virtupharma.com.au/forum/remote-lab-work-1" className="read-more">Read more</a>
        </div>
      </div>
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/remote-lab-work">
          <img src="https://virtupharma.com.au/storage/blog/31/1592379399517115068.png" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/remote-lab-work">
            <div className="date">Jun 17, 2020</div>
            <div className="title">The Future of Lab Work is Cloud-Based</div>
            <div className="short-desc">Remote lab work</div>
          </a><a href="https://virtupharma.com.au/forum/remote-lab-work" className="read-more">Read more</a>
        </div>
      </div>
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/science-lab-remote">
          <img src="https://virtupharma.com.au/storage/blog/9/1588639592925582427.jpg" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/science-lab-remote">
            <div className="date">May 05, 2020</div>
            <div className="title">Scientific Lab Education Needs Revamp</div>
            <div className="short-desc">Scientific Lab Education Needs Revamp</div>
          </a><a href="https://virtupharma.com.au/forum/science-lab-remote" className="read-more">Read more</a>
        </div>
      </div>
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/coronavirus-students-remote-learning-science">
          <img src="https://virtupharma.com.au/storage/blog/8/1585605685613710161.jpeg" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/coronavirus-students-remote-learning-science">
            <div className="date">Mar 30, 2020</div>
            <div className="title">Remote learning; The Way to Move Forward During COVID-19</div>
            <div className="short-desc">Remote science learning</div>
          </a><a href="https://virtupharma.com.au/forum/coronavirus-students-remote-learning-science" className="read-more">Read more</a>
        </div>
      </div>
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/cloud-science-training-coronavirus">
          <img src="https://virtupharma.com.au/storage/blog/7/1584057701275746760.jpg" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/cloud-science-training-coronavirus">
            <div className="date">Mar 13, 2020</div>
            <div className="title">Cloud Science Training During Coronavirus Pandemic</div>
            <div className="short-desc">Read about cloud based labs at VirtuPharma</div>
          </a><a href="https://virtupharma.com.au/forum/cloud-science-training-coronavirus" className="read-more">Read more</a>
        </div>
      </div>
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/internship-pharmaceutical-industry">
          <img src="https://virtupharma.com.au/storage/blog/6/1583907372172739945.jpg" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/internship-pharmaceutical-industry">
            <div className="date">Mar 11, 2020</div>
            <div className="title">How hard is it to find an internship in the pharmaceutical industry?</div>
            <div className="short-desc">Read how to find an internship with us</div>
          </a><a href="https://virtupharma.com.au/forum/internship-pharmaceutical-industry" className="read-more">Read more</a>
        </div>
      </div>
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/lab-technician-interview-questions">
          <img src="https://virtupharma.com.au/storage/blog/5/158167414799527384.jpg" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/lab-technician-interview-questions">
            <div className="date">Feb 14, 2020</div>
            <div className="title">Top 5 Lab Technician Interview Questions (with answers)</div>
            <div className="short-desc">Read our top 5 lab technician questions for the interview.</div>
          </a><a href="https://virtupharma.com.au/forum/lab-technician-interview-questions" className="read-more">Read more</a>
        </div>
      </div>
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/pharmaceutical-gmp-training-in-virtual-reality">
          <img src="https://virtupharma.com.au/storage/blog/4/1580899344440197552.jpg" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/pharmaceutical-gmp-training-in-virtual-reality">
            <div className="date">Feb 05, 2020</div>
            <div className="title">Pharmaceutical GMP Training in the Virtual Reality: Compliance without deviations</div>
            <div className="short-desc" />
          </a><a href="https://virtupharma.com.au/forum/pharmaceutical-gmp-training-in-virtual-reality" className="read-more">Read more</a>
        </div>
      </div>
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/what-does-a-laboratory-technician-do">
          <img src="https://virtupharma.com.au/storage/blog/3/1580742126348179857.jpg" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/what-does-a-laboratory-technician-do">
            <div className="date">Feb 03, 2020</div>
            <div className="title">What does a laboratory technician do? </div>
            <div className="short-desc">What does a laboratory technician do? </div>
          </a><a href="https://virtupharma.com.au/forum/what-does-a-laboratory-technician-do" className="read-more">Read more</a>
        </div>
      </div>
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/gmp-method-transfer-related-to-the-glp">
          <img src="https://virtupharma.com.au/storage/blog/2/1579878038366259434.jpg" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/gmp-method-transfer-related-to-the-glp">
            <div className="date">Jan 24, 2020</div>
            <div className="title">GMP method transfer</div>
            <div className="short-desc">Method transfer between 2 GMP labs</div>
          </a><a href="https://virtupharma.com.au/forum/gmp-method-transfer-related-to-the-glp" className="read-more">Read more</a>
        </div>
      </div>
      <div className="blog-box">
        <a href="https://virtupharma.com.au/forum/graduate-unemployment">
          <img src="https://virtupharma.com.au/storage/blog/1/1579610974684932076.jpg" alt="blog" />
        </a><div className="blog-text"><a href="https://virtupharma.com.au/forum/graduate-unemployment">
            <div className="date">Jan 20, 2020</div>
            <div className="title">Graduate unemployment</div>
            <div className="short-desc">Science education has longed been touted as the path to a high paying, fulfilling career. It is the best way to increase the productivity and innovation of an economy.</div>
          </a><a href="https://virtupharma.com.au/forum/graduate-unemployment" className="read-more">Read more</a>
        </div>
      </div>
    </div>
  </div>
</main>


    )
}

export default Blog
