import React, { Component } from 'react';
import resumeData from '../resumeData';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './Resume_Jesse_Du.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class Resume extends Component {

  render() {
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item, i) => {
                return (
                  <div key={i} className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                      </p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item, i) => {
                return (
                  <div key={i} className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>

        <div className="row publication">
          <div className="three columns header-col">
            <h1><span>Publications</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.publication && resumeData.publication.map((item, i) => {
                return (
                  <div key={i} className="row item">
                    <div className="twelve columns">
                      <h3><a href={item.Link} target="_blank">{item.PaperName}</a></h3>
                      <p className="info">
                        {item.journal}
                        <span>&bull;</span> <em className="date">{item.VolumeNumber}, {item.IssueNumber}, {item.Year}</em></p>
                      <p>
                        {item.Abstract}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="nine columns main-col">
            <p className="info">And more!</p>
          </div>
        </div>

        {/*} <div className="row document">

          <Document
            file="resume.pdf"
          >
            <Page pageNumber={2} />
          </Document>

          </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>
              {resumeData.skillsDescription}
            </p>

            <div className="bars">

              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item, i) => {
                    return (
                      <li key={i}>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                          style={{ width: `${item.level}%` }}
                        >
                        </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

              </ul>

            </div>

          </div>

        </div>*/}
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Resume</span></h1>
          </div>  

            <div className="nine columns main-col">
                <div className="row item">
                  <div class="columns download">
                  <p>
                     <a href= {pdf} target="_blank" class="button" style={{color: "white", display: "block", textAlign: "center"}}>
                       {/* <i class="fa fa-download"></i> */}
                       See Full Resume
                     </a>
                  </p>
                  </div>
                </div>
            </div>
          
        </div>

      </section>
    );
  }
}
