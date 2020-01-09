import React, { Component } from 'react';
import logo from './images/Long_HCDE_logo.png';
import persona from './images/HCDEpersona.png';
import journey from './images/HCDEjourneymap.png';
import reflection from './images/reflection.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy';


const navItems = ['introduction', 'research', 'ideation', 'prototype', 'reflection']

class HCDE extends Component {
  state = {
    showMobileMenu: false,
  }

  render() {
    const { showMobileMenu } = this.state
    const navClass = showMobileMenu ? 'nav' : 'nav hider'

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
        <img src={logo} title="A user-centered design project" alt="LinkNow" />
          <div className="row top-content">
            <div className="three columns header-col">
              <h1><span>Introduction</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <p>
                    Stakeholder for this research group are the Department of Human Centered Design &amp; Engineering (HCDE) at the University of Washington and the HCDE Alumni Leadership Board. The alumni board was formed in January 2018 to support efforts to: make connections between HCDE students and alumni, to extend HCDE experiences beyond graduation, and to create a learning community around the department.
                    </p>
                    <p>
                    The research goal is to understand the experiences and needs of HCDE alumni, especially those early in their career. We want to learn about career paths and key transitional moments in alumni careers. We want to understand ongoing learning, networking, and other needs and to discover how alums are meeting or not meeting those needs today. Our efforts will inform board activity planning and help the board to create a strategic direction that will impact student and alumni experiences into the future.
                    </p>
                    <p>
                    This research was completed over nine weeks as an undergraduate directed research group in the Human Centered Design &amp; Engineering department at the University of Washington in Summer 2019.
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
                  <h3>Secondary Research</h3>
                    <p>
                      In order to gain an understanding of alumni engagement, the team starts with secondary research using previous HCDE study data and information available on the internet to explore how different institutions of higher education engage with their students after graduation; e.g. mixer events or learning workshops for alumni working in the UX industry.
                    </p>
                    <h3>Interviews</h3>
                    <p>
                      The team then moves onto primary research in the form of semi-structured interviews with recent HCDE alumni now working in the tech industry. Considering that we are looking for qualititive feedback, the semi-structured format allows the interviewer to better explore potentially important topics as they arise in the interviews. 
                    </p>
                    <h6>Questions</h6>
                    <ul>
                      <li><span>• </span>What are early-career HCDE alumni experiencing in the workforce after they graduate?</li>
                      <li><span>• </span>What are the critical challenges they face and how are they handling it?</li>
                      <li><span>• </span>How are alumni engaging with the HCDE community after graduation?</li>
                    </ul>
                    <p>
                      The interviews are 60-minute in length, conducted both in-person at Amazon’s Alexandria Building research labs and remote via Zoom. Screening and recruitment were performed through outsourced recruiting agency. Our team interviewed nine alumni in total; I personally participated in five interview sessions as the interviewer and three as the note-taker.
                    </p>
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
                    <h3>Topline Report</h3>
                    <p>
                    We parse through the interview transcripts and notes to identify interesting comments and common themes across alumni. We then compile a top-line report with three key findings that shows the current pain points in HCDE alumni engagement, as well as implications from our interviews on what kind of concrete actions the department can take to mitigate those pain points.
                    </p>
                    <h6>Findings</h6>
                    <ul>
                      <li><span>• </span>Many HCDE alumni feel underprepared for UX work in the industry</li>
                      <li><span>• </span>Many dislike traditional "business card exchange" mixer events commonly hosted for alumni</li>
                      <li><span>• </span>Most early-career alumni are eager to connect with current students and give back to the community</li>
                    </ul>
                    <h6>Implications</h6>
                    <ul>
                      <li><span>• </span>Current students would appreciate programs that facilitate a smoother transition into industry</li>
                      <li><span>• </span>Alumni would prefer events with more organized activities (workshops, talks, etc.)</li>
                      <li><span>• </span>Many alumni explicitly mention interest in mentorship programs to connect with current students</li>
                    </ul>
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
                    <h3>Persona</h3>
                    <p>
                      For our final deliverables to the Alumni Leadership Board, the team creates a persona, Nick, to communicate our findings. Most of Nick's story is taken directly from interviews with actual early-career HCDE alumni, and we believe our persona is an accurate representation of their aspirations and struggles.
                    </p>
                    <img src={persona} title="Persona" alt="ps" style={{marginBttom: 30}}/>
                    <h3>Journey Map</h3>
                    <p>
                      If the persona outlines alumni's struggles and pain points, our journey map provides some opportunities for the department to address those issues at each stage of the alumni's journey from graduation preparation to career advancement.
                    </p>
                    <img src={journey} title="Journey Map" alt="jm" style={{marginBttom: 30}}/>
                    <p>
                      The persona and journey map are then presented together with topline report to the Alumni Leadership Board. After holistic analysis of all our findings, we conclude our presentation with three concrete-action recommendations for the department to better engage its alumni and help them in their early careers.
                    </p>
                    <h6>Recommendations</h6>
                    <ul>
                      <li><span>• </span>Establish mentorship program to connect alumni with current students</li>
                      <li><span>• </span>Provide industry-specific portfolio reviews and mock interviews</li>
                      <li><span>• </span>Host skill-specific or industry-specific workshops for alumni</li>
                    </ul>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <section id="reflection">
          <div className="row bottom-content">
            <div className="three columns header-col">
              <h1><span>reflection</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                  <p>
                    Overall, this research study was extremely successful and much needed. We formally presented our report to the HCDE Alumni Leadership Board on 20 August 2019; the board members were very interested in our findings and many stayed behind after the scheduled session to continue discuss with us ways the HCDE department can improve engagement with its alumni. The faculty facilitator of our research group, Mike Berg, who is also on the Alumni Leadership Board, later told us that our findings had brought significant change within the department. For anyone working in UX, there is no greater feeling than knowing that your work has brought concrete improvement to the lives of others.
                  </p>
                  <p>
                    Personally, this is my first time working so extensively with qualitative research. Prior to this, having been trained mostly as a designer, my experience with research was limited to secondary research online and usability tests. Spending a summer running around downtown Seattle talking to different people with fascinating stories was not what I had expected from UX. However, the experience has been especially transformative. Having been a part of this study, I now have a much better understanding of and appreciation for UX research. In fact, this experience is one of the reasons that I am now leading a user research study for the Svoboda Diaries Project.
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

export default HCDE;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}