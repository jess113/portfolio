import React, { Component } from 'react';
import logo from './images/Long_VizCAD_logo.png';
import introduction from './images/VizCADintro.jpg';
import persona from './images/VizCADpersona.png';
import companalysis from './images/VizCADcompanalysis.png';
import requirements from './images/VizCADrequirements.png';
import infoarch from './images/VizCADinfoarch.png';
import userflow from './images/VizCADflow.jpg';
import paperproto from './images/VizCADpaperproto.png';
import wireframe from './images/VizCADwireframe.png';
import hifi11 from './images/VizCADhifi1-1.png';
import hifi12 from './images/VizCADhifi1-2.png';
import hifi13 from './images/VizCADhifi1-3.png';
import hifi14 from './images/VizCADhifi1-4.png';
import hifi15 from './images/VizCADhifi1-5.png';
import hifi16 from './images/VizCADhifi1-6.png';
import hifi17 from './images/VizCADhifi1-7.png';
import hifi21 from './images/VizCADhifi2-1.png';
import hifi22 from './images/VizCADhifi2-2.png';
import hifi23 from './images/VizCADhifi2-3.png';
import hifi24 from './images/VizCADhifi2-4.png';
import hifi25 from './images/VizCADhifi2-5.png';
import hifi26 from './images/VizCADhifi2-6.png';
import hifi27 from './images/VizCADhifi2-7.png';
import reflection from './images/VizCADreflection.jpg';
import ImageGallery from 'react-image-gallery';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy';


const navItems = ['introduction', 'research', 'ideation', 'prototype', 'reflection']

class VizCAD extends Component {
  state = {
    showMobileMenu: false,
  }

  render() {
    const { showMobileMenu } = this.state
    const navClass = showMobileMenu ? 'nav' : 'nav hider'

    const hifi1 = [
      {
        original: hifi11,
        thumbnail: hifi11,
      },
      {
        original: hifi12,
        thumbnail: hifi12,
      },
      {
        original: hifi13,
        thumbnail: hifi13,
      },
      {
        original: hifi14,
        thumbnail: hifi14,
      },
      {
        original: hifi15,
        thumbnail: hifi15,
      },
      {
        original: hifi16,
        thumbnail: hifi16,
      },
      {
        original: hifi17,
        thumbnail: hifi17,
      },
    ]

    const hifi2 = [
      {
        original: hifi21,
        thumbnail: hifi21,
      },
      {
        original: hifi22,
        thumbnail: hifi22,
      },
      {
        original: hifi23,
        thumbnail: hifi23,
      },
      {
        original: hifi24,
        thumbnail: hifi24,
      },
      {
        original: hifi25,
        thumbnail: hifi25,
      },
      {
        original: hifi26,
        thumbnail: hifi26,
      },
      {
        original: hifi27,
        thumbnail: hifi27,
      },
    ]

    return (
      <React.Fragment>
        <nav id="nav-wrap">
          <div className="mobile-btn"
            onClick={() => this.setState({ showMobileMenu: !showMobileMenu })}>
          </div>
          {/* <div className="mobile-btn" href="#" title="Hide navigation">Hide navigation</div> */}
          <ul id="nav" className={navClass}>
            {/*<Link id="back" to="/" style={{ padding: '10px' }}>back</Link>*/}
            <Scrollspy id="list" items={navItems} currentClassName="current">
              {navItems.map((item, i) => {
                return <li key={i}><AnchorLink href={`#${item}`}>{capitalize(item)}</AnchorLink></li>
              })}
            </Scrollspy>
          </ul>
        </nav>

        <section id="introduction">
        <img src={logo} title="A visual design exercise" alt="SPM" style={{width:"100%"}}/>
          <div className="row top-content">
            <div className="three columns header-col">
              <h1><span>Introduction</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <p>
                      Currently, between the six traffic agencies (WSDOT, SDOT, WSP, SPD, SFD, and KC Metro) that together constitue the Seattle Area Joint Operations Group (SAJOG), there exists four separate computer-aided dispatch (CAD) systems, all generic commercial products. There is little information sharing between the systems, and most of that is done via phone calls and other low-efficiency channels, leading to <b>unsatisfactory coordination between the numerous traffic agencies on incident response that requires overlapping jurisdiction</b>. The Washington State Department of Transportation (WSDOT) and its partners are seeking to address this issue with its Virtual Coordination Center (VCC), aiming to increase the situational awareness of traffic incidents, and create a shared understanding of incident response and management.  
                    </p>
                    <p>
                      As part of its umbrella design solution, <b>VizCAD combines incident information from these disparate sources together into</b> <b style={{color: "#11ABB0"}}>an integrated and enhanced CAD system</b>. In doing so, we hope to break down the institutional barriers separating agencies that may hinder their collaborative incident response. Upon successful implementation testing with the Phase 1 design centred around WSDOT Traffic Management Centers (TMCs), the ultimate goal is to expand VizCAD as the integrated system serving all SAJOG agencies in the Greater Seattle Area.
                    </p>  
                    <img src={introduction} title="Introduction" alt="in" style={{ marginBottom: 30 }} />
                    <p>
                      This project was completed over nine weeks in a team of three as part of an undergraduate course on advanced projects in the Human Centered Design &amp; Engineering department at the University of Washington in Spring 2020.
                  </p>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <section id="research">
          <div className="row content">
            <div className="three columns header-col">
              <h1><span>Research</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Interviews</h3>
                    <p>
                      To start our project, the team conducts a series of semi-structured interviews with seven traffic managers/operators from five agencies and two senior VCC researchers who are familiar with the internal workings of Seattle traffic agencies to understand the very complex environment of traffic incident response and management between the numerous agencies on state, county, and city and levels. Espcially by asking TMC workers who are at the centre of state-level traffic management, we can identify crucial painpoints in the current interagency setup, and how CAD interfaces can play a role.
                    </p>
                    <h6>Takeaways</h6>
                    <ul>
                      <li><span>• </span>TMCs critically need Seattle Police Department (SPD) data for areas with overlapping jurisdiction e.g. traffic within the SR-99 tunnel and I-5 ramps</li>
                      <li><span>• </span>For outside agency data, clear identification of source and automatic code conversion into WSDOT standards are musts</li>
                      <li><span>• </span>Easy accesss to third-party applications such as CCTV footage and traffic map would be preferred</li>
                    </ul>
                    <h3>Personas</h3>
                    <p>
                      Based on our accumulated research, we quickly create a persona of Carl the TMC operator to illustrate the everyday painpoints in traffic incident response, taking into consideration both the CAD virtual environment as well as the physical workplace environment.
                    </p>
                    <img src={persona} title="Persona" alt="ps" style={{ marginBottom: 30 }} />
                    <p>
                      The persona is low-fidelity for internal reference among team members.
                    </p>
                    <h3>Competitive Analysis</h3>
                    <p>
                      After gaining a basic understanding of the highly complex working relationships between the various agencies, we turn to look at some of the CAD systems currently being used. This is perhaps one of the most important steps of the design cycle, as not only do we have to look for potential points of improvements for each system, but also develop strategies for integrating everything into one single system. However, this proves to be a difficult process as many of the CAD interfaces are considered sensitive information and not easily disclosed. We are able to only acqure raw CAD data from WSP, SPD, SFD, and KC Metro in CSV form, so we could at least see what kind of information is being collected by each agency. For some of the CAD systems that we are able to study more closely, the interface design is very dated (Windows 98 aesthetic) and in dire deed of visual overhaul.
                    </p>
                    <img src={companalysis} title="Competitive Analysis" alt="ca" style={{marginBottom: 30}}/>
                    <h6>Takeaways</h6>
                    <ul>
                      <li><span>• </span>Different agency has different needs from CAD</li>
                      <li><span>• </span>Different agency has different codes and standards for CAD data</li>
                      <li><span>• </span>Current CAD system interfaces heavily focus on function over usability</li>
                    </ul>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <section id="ideation">
          <div className="row content">
            <div className="three columns header-col">
              <h1><span>Ideation</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Design Requirements</h3>
                    <p>
                      The design requirements outlines all the necessary functionalities a CAD system must have in order to be able to serve all the current and potential needs of SAJOG agencies. As we have realized that different agencies have differnet priorities when it comes to CAD information, how to combine into one system while also streamlining overall usability proves to be an especially challenging task. By using a tiered could-have/should-have/must-have method, we are able to select ten specific requirements that we think, when fullfilled, can offer the best balance between desirability, feasibility, and viability for everyone.
                    </p>
                    <img src={requirements} title="Design Requirements" alt="dr" style={{marginBottom: 30}}/>
                    <h6>Requirements</h6>
                    <ul>
                      <li><span>• </span>Allow User to customize CAD interface to their preferred layout</li>
                      <li><span>• </span>Allow User to add widgets to the interface when needed</li>
                      <li><span>• </span>Allow User to easily access CCTV footage of the incident area</li>
                      <li><span>• </span>Allow User to verify incident data source</li>
                      <li><span>• </span>Allow User to manually update incident data</li>
                      <li><span>• </span>Allow User to configure notification settings for new entries</li>
                      <li><span>• </span>Allow User to export detailed data of a particular incident</li>
                      <li><span>• </span>Allow User to check response status and time estimates</li>
                      <li><span>• </span>Allow User to check incident and response status</li>
                      <li><span>• </span>Allow User to see invovled agencies and operators</li>
                    </ul>
                    <h3>Information Architecture</h3>
                    <p>
                      Our solution focuses on the information flow of incident management on the integrated CAD, which starts from selecting one incident on the Active/Pending dashboard to viewing and/or editing the data of individual incidents in the Workspace.
                    </p>
                    <img src={infoarch} title="Information Architecture" alt="ia" style={{marginBottom: 30}}/>
                    <h3>User Flow</h3>
                    <p>
                      Since we are developing a replacement product, for best usability, the new system's task flow should remain mostly the same with what the users are already familiar with. Having conducted thorough research into the current user flows in incident response and management, we can thus ensure minimum disruption to the established procedures.  
                    </p>
                    <img src={userflow} title="User Flow" alt="uf" style={{marginBottom: 30}}/>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <section id="prototype">
          <div className="row content">
            <div className="three columns header-col">
              <h1><span>Prototype</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Prototype Sketches</h3>
                    <p>
                      Due to the COVID-19 pandemic and quarantine measures, for "paper" prototypes we have to do all our collaborative work on Figma. Still, we explore a variety of layouts for initial brainstorming. Unfortunately, usability testing feedback is also limited due to quarantine, but we manage to hold two online testing sessions with senior VCC researchers who happen to be available.
                    </p>
                    <img src={paperproto} title="Paper Prototype" alt="pp" style={{marginBottom: 30}}/>
                    <h6>Feedback</h6>
                    <ul>
                      <li><span>• </span>Choose an initial default view: dashboard or individual workspace?</li>
                      <li><span>• </span>User should be able to manually edit each dashboard component</li>
                      <li><span>• </span>User should be able to simutaneously open two incident windows?</li>
                      <li><span>• </span>System needs to automatically extract incident entries to agency's own database</li>
                      <li><span>• </span>Component section headings should be more obvious</li>
                    </ul>
                    <h3>Wireframes</h3>
                    <p>
                    Using one of our sketches with positive reviews as a reference point, we further refine the design based on usability feedback into a wireframe before moving on to high-fidelity mockups. We decide to proceed with a vertical design as it turns out many TMC operators prefer to have their CAD monitors set to vertical in order to view more information on the incident lists.
                    </p>
                    <img src={wireframe} title="Wireframe" alt="wf" style={{ marginBottom: 30 }} />
                    <h3>High-fidelity Mockups</h3>
                    <p>
                    After more feedback and wireframe iterations, we take our design into the high-fidelity mockup stage. After confirming our choice on a visual theme, a series of mockups are produced for each unique key screen in the user task flow. Another round of in-class presentation and critique in the final week leads to a second iteration of design focusing on minor details.
                    </p> 
                    <h6>First Iteration</h6>
                    <ImageGallery items={hifi1} showPlayButton={false} showFullscreenButton={false}/>
                    <h6>Second Iteration</h6>
                    <ImageGallery items={hifi2} showPlayButton={false} showFullscreenButton={false}/>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <section id="reflection">
          <div className="row bottom-content">
            <div className="three columns header-col">
              <h1><span>Reflection</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                  <p>
                    Designing a replacement product is much more difficult than that of a new one. Instead developing everything from scratch as we please, we have to take a lot more practical factors into consideration: How to fit into established user flows? How to ensure a smooth transition for the user upon adoption? How to maximize the potential benefits of the new product so that adoption is even worthwhile in the first place? The very nature of this project itself is also extremely complicated, invovling half a dozen stakeholders with interlocking relationships and multiplex needs. In fact, almost half of our project time was devoted to simply trying to understand the whole situation: which agency works directly with which; which department has access to another's CAD; which of those are read-only... But all those efforts proved to be absolutely necessary for us to come up with a polished product to be presented to actual representatives from SAJOG for consideration. Indeed, <b style={{color: "#11ABB0"}}>all good design stems from good research</b>; <b>the more complex the problem, the more crucial the research.</b>
                  </p>
                  <p>
                    <b>This project was beset from the beginning by real-world turmoils</b>. The COVID-19 pandemic and the ensuing statewide quarantine forced us to learn working from home, which in my opinion is far from ideal for a team of designers. However, thanks to online collaboration tools like Figma and Miro, as well as the amazing flexibility and understanding from everyone invovled (many midnight group calls were endured), we were able to meet all expectations and exceed some. In the project's final weeks, protests against police brutality swept across the US following the death of George Floyd. We were then faced with a moral dilemma considering the identity of some of our stakeholders. Tough decisions were made, but in the end, I think VizCAD is something we can all be quite proud of.
                  </p>
                  <img src={reflection} title="Reflection" alt="rf" style={{marginBottom: 30}}/>
                  <p>
                    In our original proposal, the current iteration is only Phase 1 of the VizCAD project, designed with WSDOT and its TMCs in mind as primary users. This limitation in scope is largely due to time and resources constraints; it was simply impossible to interview every SAJOG agency in-depth for their particular painpoints and needs. However, VizCAD is designed with future expansion in mind, and stresses flexibility in its “widgets”-based layout. When we have time to serve another agency, the design can easily be updated to suit their specific needs. What we ultimatley envision is one integrated system serving all SAJOG agencies as the backbone of a collaborative regional incident reponse and management framework, and we believe VizCAD can be the answer.
                  </p>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

      </React.Fragment>
    );
  }
}

export default VizCAD;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}