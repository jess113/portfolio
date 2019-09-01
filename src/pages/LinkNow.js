import React, { Component } from 'react';
import introduction from './introduction.png';
import persona1 from './persona1.png';
import persona2 from './persona2.png';
import journey from './journeymap.png';
import companalysis from './companalysis.png';
import storyboard from './storyboard.png';
import infoarch from './infoarch.png';
import paperproto from './paperproto.png';
import wireframe1 from './wireframe1.png';
import wireframe2 from './wireframe2.png';
import wireframe3 from './wireframe3.png';
import wireframe4 from './wireframe4.png';
import reflection from './reflection.jpg';
import ImageGallery from 'react-image-gallery';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';


const navItems = ['introduction', 'research', 'ideation', 'prototype', 'reflection']

class LinkNow extends Component {
  state = {
    showMobileMenu: false,
  }

  render() {
    const { showMobileMenu } = this.state
    const navClass = showMobileMenu ? 'nav' : 'nav hider'

    const personas = [
      {
        original: persona1,
        thumbnail: persona1,
      },
      {
        original: persona2,
        thumbnail: persona2,
      },
    ]

    const wireframes = [
      {
        original: wireframe1,
        thumbnail: wireframe1,
      },
      {
        original: wireframe2,
        thumbnail: wireframe2,
      },
      {
        original: wireframe3,
        thumbnail: wireframe3,
      },
      {
        original: wireframe4,
        thumbnail: wireframe4,
      },
    ]

    const hifi = [
      {
        original: 'https://static.wixstatic.com/media/bfc365_f159b326a1c74da7a2e101a9ce2f0adc~mv2_d_3368_2380_s_2.png/v1/fill/w_1129,h_798,al_c,q_85,usm_0.66_1.00_0.01/bfc365_f159b326a1c74da7a2e101a9ce2f0adc~mv2_d_3368_2380_s_2.webp',
        thumbnail: 'https://static.wixstatic.com/media/bfc365_f159b326a1c74da7a2e101a9ce2f0adc~mv2_d_3368_2380_s_2.png/v1/fill/w_1006,h_711,al_c,q_90,usm_0.66_1.00_0.01/bfc365_f159b326a1c74da7a2e101a9ce2f0adc~mv2_d_3368_2380_s_2.webp',
      },
      {
        original: 'https://static.wixstatic.com/media/bfc365_c35722da0e3a42e3be1b6885b284e9da~mv2_d_3368_2380_s_2.png/v1/fill/w_1006,h_711,al_c,q_90,usm_0.66_1.00_0.01/bfc365_c35722da0e3a42e3be1b6885b284e9da~mv2_d_3368_2380_s_2.webp',
        thumbnail: 'https://static.wixstatic.com/media/bfc365_c35722da0e3a42e3be1b6885b284e9da~mv2_d_3368_2380_s_2.png/v1/fill/w_1006,h_711,al_c,q_90,usm_0.66_1.00_0.01/bfc365_c35722da0e3a42e3be1b6885b284e9da~mv2_d_3368_2380_s_2.webp',
      },
      {
        original: 'https://static.wixstatic.com/media/bfc365_7caa141c9ad945888f27ff475f3232c3~mv2_d_3368_2380_s_2.png/v1/fill/w_1006,h_711,al_c,q_90,usm_0.66_1.00_0.01/bfc365_7caa141c9ad945888f27ff475f3232c3~mv2_d_3368_2380_s_2.webp',
        thumbnail: 'https://static.wixstatic.com/media/bfc365_7caa141c9ad945888f27ff475f3232c3~mv2_d_3368_2380_s_2.png/v1/fill/w_1006,h_711,al_c,q_90,usm_0.66_1.00_0.01/bfc365_7caa141c9ad945888f27ff475f3232c3~mv2_d_3368_2380_s_2.webp',
      },
      {
        original: 'https://static.wixstatic.com/media/bfc365_b6aded2296c14f56baa94a7b68baf34f~mv2_d_3368_2380_s_2.png/v1/fill/w_1006,h_711,al_c,q_90,usm_0.66_1.00_0.01/bfc365_b6aded2296c14f56baa94a7b68baf34f~mv2_d_3368_2380_s_2.webp',
        thumbnail: 'https://static.wixstatic.com/media/bfc365_b6aded2296c14f56baa94a7b68baf34f~mv2_d_3368_2380_s_2.png/v1/fill/w_1006,h_711,al_c,q_90,usm_0.66_1.00_0.01/bfc365_b6aded2296c14f56baa94a7b68baf34f~mv2_d_3368_2380_s_2.webp',
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
            <Link to="/" style={{ padding: '10px' }}>back</Link>
            <Scrollspy items={navItems} currentClassName="current">
              {navItems.map((item, i) => {
                return <li key={i}><AnchorLink href={`#${item}`}>{capitalize(item)}</AnchorLink></li>
              })}
            </Scrollspy>
          </ul>
        </nav>

        <section id="introduction">
          <div className="row content">
            <div className="three columns header-col">
              <h1><span>Introduction</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <p>
                      Currently, many volunteers, especially students, do not actively search for volunteering opportunities but rely on word-of-mouth recommendations while some complain it's often a hassle to find positions that interest them. Our project aims to create a mobile platform that can better connect potential volunteers with volunteering organizations and position by making the searching process as easy and stress-free as possible. LinkNow is a multi-faceted application that allows potential volunteers to gain a personalized selection experience by connecting them to organizations, positions, and groups with like-minded individuals based on their time availability and interests. By lowering the physical barrier between volunteers and opportunities, we hope to encourage more people to start volunteering.
                  </p>
                  <img src={introduction} title="Introduction" alt="in" style={{marginBottom: 30}}/>
                    <p>
                      This project was completed over nine weeks as part of an undergraduate course on User-Centered Design in the Human Centered Design and Engineering department at the University of Washington in Spring 2019.
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
                      We conduct a series of semi-structured interviews on both graduate and undergraduate students at the University of Washington who have had volunteering experience to better understand the issues they were facing. The flow of semi-structured interviews helped us talk about several areas of importance as we were in an exploratory phase. The interviews allowed us to identify and begin defining our problem space.
                  </p>
                    <h6>Takeaways</h6>
                    <ul>
                      <li><span>• </span>Students are often too busy to go out of their way to look for volunteering opportunities</li>
                      <li><span>• </span>Students are too specific in their academic needs to easily find the right volunteering positions</li>
                    </ul>
                    <h3>Competitive Analysis</h3>
                    <p>
                      We decided to look at all platforms that our interviewees used to find volunteering opportunities and research other applications that were popular in this space. We review the official websites of the United Way of King County, VolunteerMatch, Handshake, and the Golden Volunteer mobile application. After analyzing their features we could identify what was working for these applications and more importantly what was wrong with them. Linking these pain points back to our findings from the user interviews allowed us to start focusing in on our problem space.
                  </p>
                    <img src={companalysis} title="Competitive Analysis" alt="ca" style={{marginBottom: 30}}/>
                    <h6>Takeaways</h6>
                    <ul>
                      <li><span>• </span>Poor filter options preventing users from finding specific volunteer opportunities</li>
                      <li><span>• </span>No variety of opportunities</li>
                      <li><span>• </span>Confusing search process hampers the user experience</li>
                    </ul>
                    <h3>Personas & Journey Map</h3>
                    <p>
                      Based on our accumulated research, we decide to create two personas, Anna and Bob, to represent the two main types of student volunteers in our user group—active and passive. By creating these two fictional characters, we could establish “the user” and solidify their different pain-points to help develop our product around. The scenario outlines for our personas guided us through creating our Journey map in the next step.
                  </p>
                    <ImageGallery items={personas} showPlayButton={false} showFullscreenButton={false}/>
                    <p>
                      We built our journey map around our persona Anna's scenario. This journey follows Anna in her pursuit of finding a volunteering opportunity. It takes a comprehensive look into all the methods and platforms she interacts with in order to find a volunteering position that fits her needs. The map is based on the experiences of our interviewees (01),  although we did make assumptions in places about what was going through Anna's head and about her emotional state. By capturing the step-by-step touchpoints along Anna’s experience, we can empathize with her. Simultaneously, we can map out the areas of high stress to better inform our design. This process was crucial in developing our design requirements as we now knew what areas to target.
                  </p>
                    <img src={journey} title="Journey Map" alt="jm" style={{marginBttom: 30}}/>
                    <h6>Takeaways</h6>
                    <ul>
                      <li><span>• </span>Active User is stressed when they can't find a position that matches their needs</li>
                      <li><span>• </span>Active User gets stressed when they have to constantly check multiple websites</li>
                      <li><span>• </span>Active User listens to peers recommendations</li>
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
                      As the culmination of our research, the design requirements outline what our product will be containing. After identifying user needs, the shortcomings of existing products, and the problems facing the volunteering community, we developed a list of important features that our product would have in order to address these challenges. We came up with ten specific requirements, broken down following the action-object-context and data-functional-contextual methods. Based on the feedback we received, we further refined this list into the 6 most essential design requirements. This process helped us solidify the pain points we were going to tackle through our designs.
                    </p>
                    <h6>Requirements</h6>
                    <ul>
                      <li><span>• </span>Allow User to input Time Availability and cater position to when they are free</li>
                      <li><span>• </span>Allow User to add the fields of volunteering they are interested in</li>
                      <li><span>• </span>Allow users to be able to engage with a group or community of like-minded individuals volunteering in similar areas</li>
                      <li><span>• </span>Allow Users to easily apply for a volunteering position, and display information needed to make this decision</li>
                      <li><span>• </span>Allow users to view upcoming and past events or positions they have signed up for</li>
                      <li><span>• </span>Allow users to favorite events or organization and have the ability to share these with friends</li>
                    </ul>
                    <h3>Storyboards</h3>
                    <p>
                      After identifying user pain points with current volunteering platforms, we are ready to come up with solutions that can facilitate a better experience. Following the conditions outlined in our design requirements, we brainstorm scenarios where our application would prove more convenient and enjoyable to the user than the existing alternatives. The reason being, to effectively convey the experience of the design ideation in a narrative format. This would help evaluate potential solutions and their viability from a real-world standpoint.
                    </p>
                    <img src={storyboard} title="Storyboard" alt="sb" style={{marginBottom: 30}}/>
                    <h3>Information Architecture</h3>
                    <p>
                      Following our storyboards, we created an information architecture diagram to map out the high-level components and hierarchical relationships of our system. Creating an Information Architecture helped us visualize the overall flow of our application. We took all the ideas we had in our storyboards and created an interconnected flow of our design solution. Mapping out all possible state changes reminded us of other interface interactions we still needed to design.
                    </p>
                    <img src={infoarch} title="Information Architecture" alt="ia" style={{marginBottom: 30}}/>
                    <p>
                      Initially, we decided to create two sides of our application, one pertaining to Volunteers and the other to organizations that provide these opportunities. Through this process, we realized that to do justice to our project given the timeline it would be unviable to design for both sides and hence we refined our application to focus just on Volunteers. This decision was essential in the success of our project.
                  </p>
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
                    <h3>Paper Prototype</h3>
                    <p>
                      Utilizing our Information Architecture and combining our vision from our storyboards we were able to identify three key user flows. Combining this knowledge with our Interface Sketches, we transformed these user pathways into paper prototypes. We spent a lot of time whiteboarding our ideas and sketching out how the interactions between these screens would flow. Listed below are the three user tasks.
                    </p>
                    <img src={paperproto} title="Paper Prototype" alt="pp" style={{marginBottom: 30}}/>
                    <h3>Usability Testing</h3>
                    <p>
                      After gaining feedback on our paper prototypes we polished them to be used in our usability tests. This study was conducted in order to evaluate the preliminary designs of our LinkNow application. We conducted our tests with 7 different users, each carrying out the three tasks listed above. The usability test was the most crucial feature in identifying our internal biases and assumption in terms of user interface and experience. This would allow us to gain valuable feedback and insights directly from our user group in order to improve clarity and eliminate unnecessary functions. It also helped inform modifications and our design choices as we transformed our paper prototypes into wireframes.
                    </p>
                    <p>
                      For each test, the user had to complete one user path flow that had a completion criterion. We also asked a set of pre and post-test questions that acted as a second round of user research. This was essential as throughout our process we tweaked the direction of our application and wanted to ensure that we were still on track. The post interview questions also gave us an opportunity to understand user problems and extract design recommendations from them.
                    </p>
                    <h6>Takeaways</h6>
                    <ul>
                      <li><span>• </span>Didn’t understand “Connect to Facebook” in setting up profile</li>
                      <li><span>• </span>Hard to navigate “Time Slot Availability”</li>
                      <li><span>• </span>Inconsistent interface</li>
                      <li><span>• </span>Confusing iconography for “Groups” and “My Events”</li>
                      <li><span>• </span>Unclear terminology caused confusion between “Organizations” and “Opportunities”</li>
                    </ul>
                    <h3>Wireframes</h3>
                    <p>
                    Using our paper Protytopes as a key reference point and sorting through all our learnings from our usability tests we developed annotated wireframes for LinkNow. This was an integral part for the UI of our system as essential choices relating to, layouts, design patterns, typography, and iconography were made. We created annotated wireframes for our entire system which helped us gain a better overview of what our final product was going to look like. The wireframes acted as building blocks for our final high fidelity mockups. 
                    </p>
                    <ImageGallery items={wireframes} showPlayButton={false} showFullscreenButton={false}/>
                    <h3>High-fidelity Mockups</h3>
                    <p>
                    Finally, we took our wireframes along with the feedback we received on it and created our high fidelity mockups. These screens represented the most essential functionality of each user task flow: The Time Slot Availability, Home Screen and Groups Page. After a round of in-class critique, we had the final version of our mockups that displayed fully developed stills from our application demonstrating what it would look and feel like in a working environment. The main barrier we overcame in the process was deciding the color scheme, typography style, and weight to create an effective visual hierarchy.  
                    </p>
                    <ImageGallery items={hifi} showPlayButton={false} showFullscreenButton={false}/>
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
                    Despite the unrelenting due dates and the sometimes hectic coordination, in retrospect, the entire project has been an amazing experience for everyone involved. For many on the team, this is their first time putting their conceptual knowledge of human-centered design into practice, going through the entire design process and creating an actual product that may benefit the community one day.
                  </p>
                  <p>
                    We started out barely knowing what to do. We even had trouble deciding on what user group to begin with—there were some strong opinions about which direction the project should take. In the end, we had to learn to compromise in order to work as a team. After nine weeks of hard work, it is safe to say that we are all exceedingly satisfied with our achievement. It was not easy to coordinate people with busy schedules, and sometimes the deadlines could prove demanding. But we worked it out. Everyone had their own unique characters to contribute to the team, be it technical expertise, organizational skill,  or enthusiasm. Without any of us, LinkNow would not be a possibility.
                  </p>
                  <img src={reflection} title="Reflection" alt="rf" style={{marginBottom: 30}}/>
                  <p>
                  We do recognize the structural limitations of our project—the principal challenge being time. Human-Centered design could always use more interviews, more research, more iterations.  If we could have had more time to work with, we would have definitely conducted a much more thorough user research, and perhaps expand the user group to include more diverse populations than just college students. In our early ideation phase, we also envisaged a completely separate interface of the application for volunteer organizations, but due to time and resource constraints, it had to be scrapped. Our project is far from perfect, but we are confident that LinkNow can become a successful platform for future volunteers.
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

export default LinkNow;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}