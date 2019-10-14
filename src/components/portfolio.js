import React, { Component } from 'react';
import resumeData from '../resumeData';
import Modal from 'react-awesome-modal';
import logo1 from './LinkNow_logo.png';
import logo2 from './HCDE_logo.png';
import logo3 from './Svoboda_logo.png';
import pdf from './HCDE report.pdf';
import { Link } from 'react-router-dom';

export default class Porfolio extends Component {

  state = {
    modal: {}
  }

  closeModal = () => {
    this.setState({ modal: {} })
  }

  render() {
    const { modal } = this.state
    return (<section id="portfolio">
      <h1>My Projects</h1>
      <div className="row">
        <div className="twelve columns collapsed">
          <div className="project-column">
            <Link to="/LinkNow"><img src={logo1} title="A user-centered design project" alt="LinkNow" /></Link>
          </div>
          <div className="project-column">
            <a href="https://www.svobodadiariesproject.org/" target="_blank"><img src={logo3} title="New website for Newbook Digital Text" alt="Svoboda" /></a>
          </div>
          <div className="project-column">
            <a href={pdf} target="_blank"><img src={logo2} title="Research report for the Department of HCDE" alt="HCDE" /></a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>My Codes</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item, i) => {
                return (
                  <div key={i} className="columns portfolio-item">
                    <div className="item-wrap">
                      <div onClick={() => this.setState({ modal: item })} style={{ cursor: 'pointer' }}>
                        <img src={`${item.imgurl}`} className="item-img" alt="img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <Modal
        visible={modal && modal.name}
        width="600"
        height="400"
        effect="fadeInUp"
        onClickAway={() => this.closeModal()}
      >
        <div className="portfolio-modal">
          <div>
            <h1>{modal.title}</h1>
            <p>{modal.fullDescription}</p>
            <a href={modal.githubLink} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>&nbsp;
              Github Repository
            </a>
          </div>
          <button onClick={() => this.closeModal()}>Close</button>
        </div>
      </Modal>

    </section>);
  }
}
