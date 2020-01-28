import React, { Component } from 'react';
import resumeData from '../resumeData';
import ArtNight5 from '../projects/images/Art_pic.jpg';
import Modal from 'react-awesome-modal';

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
      <div className="row design">
        <div className="three columns header-col">
          <h1><span>Design Projects</span></h1>
        </div>
        {/*<div className="row">
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
       </div>*/}

        <div className="nine columns main-col">
          {
            resumeData.portfolio_project && resumeData.portfolio_project.map((item, i) => {
              return (
                <div key={i} className="rows portfolio-item">
                  <div className="item-wrap">
                    {/*<div onClick={() => this.setState({ modal: item })} style={{ cursor: 'pointer' }}>*/}
                      <img src={`${item.imgurl}`} className="item-img" alt="img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.fullDescription}</p>
                          <form method="get" action={item.githubLink} target="_blank">
                            <button style={{ width: "100%" }}>See more</button>
                          </form>
                        </div>
                      </div>
                    {/*</div>*/}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="row coding">
        <div className="three columns header-col">
          <h1><span>Coding Projects</span></h1>
        </div>
        <div className="nine columns main-col">
          {
            resumeData.portfolio_code && resumeData.portfolio_code.map((item, i) => {
              return (
                <div key={i} className="rows portfolio-item">
                  <div className="item-wrap">
                    {/*<div onClick={() => [this.setState({ modal: item })]} style={{ cursor: 'pointer' }}>*/}
                    <img src={`${item.imgurl}`} className="item-img" alt="img" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{item.name}</h5>
                        <p>{item.fullDescription}</p>
                        <form method="get" action={item.githubLink} target="_blank">
                          <button style={{ width: "100%" }}>See more</button>
                        </form>
                      </div>
                    </div>
                    {/*</div>*/}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="row">
        <div className="three columns header-col">
          <h1><span>My Art</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="rows portfolio-item">
            <div className="item-wrap">
              <img src={ArtNight5} className="item-img" alt="img" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Jesse's Wacky Art Corner</h5>
                  <p>Nuclear armageddon? Random Japanese? Scene from the Wandering Earth? Boring still-lifes? What's the logic behind this? What even is logic? Is Jesse okay? Let's hop on the last bus 482 and explore.</p>
                  <form method="get" action="https://jess113.github.io/portfolio/#/Art" target="_blank">
                    <button style={{ width: "100%" }}>See more</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        visible={modal && modal.name}
        width="600"
        height="400"
        style={{ content: { borderRadius: '0px' } }}
        effect="fadeInUp"
        onClickAway={() => this.closeModal()}
      >
        <div className="portfolio-modal">
          <div>
            <h3>{modal.title}</h3>
            <p>{modal.fullDescription}</p>
            {/*<a href={modal.githubLink} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>&nbsp;
              See more
          </a>*/}
          </div>
          <form method="get" action={modal.githubLink} target="_blank">
            <button style={{ width: "100%" }}>See more</button>
          </form>
        </div>
      </Modal>

    </section>);
  }
}
