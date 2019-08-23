import React, { Component } from 'react';
import persona1 from './persona1.png';
import persona2 from './persona2.png';
import journey from './journeymap.png';
import companalysis from './companalysis.png';
import storyboard from './storyboard.png';
import infoarch from './infoarch.png';
import ImageGallery from 'react-image-gallery';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';


/*navbar doesnt work unless changes made to section ids*/
const navItems = ['introduction', 'research', 'ideation', 'protoype', 'reflection']

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
        thumbnail: persona2
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
          <Link to="/" style={{padding:'10px'}}>back</Link>
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
                    <img src={companalysis} title="Competitive Analysis" alt="ca" />
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
                    <ImageGallery items={personas} />
                    <p>
                      We built our journey map around our persona Anna's scenario. This journey follows Anna in her pursuit of finding a volunteering opportunity. It takes a comprehensive look into all the methods and platforms she interacts with in order to find a volunteering position that fits her needs. The map is based on the experiences of our interviewees (01),  although we did make assumptions in places about what was going through Anna's head and about her emotional state. By capturing the step-by-step touchpoints along Anna’s experience, we can empathize with her. Simultaneously, we can map out the areas of high stress to better inform our design. This process was crucial in developing our design requirements as we now knew what areas to target.
                  </p>
                    <img src={journey} title="Journey Map" alt="jm" />
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
                    <img src={storyboard} title="Storyboard" alt="sb" />
                    <h3>Information Architecture</h3>
                    <p>
                    Following our storyboards, we created an information architecture diagram to map out the high-level components and hierarchical relationships of our system. Creating an Information Architecture helped us visualize the overall flow of our application. We took all the ideas we had in our storyboards and created an interconnected flow of our design solution. Mapping out all possible state changes reminded us of other interface interactions we still needed to design.
                    </p>
                    <img src={infoarch} title="Information Architecture" alt="ia" />
                    <p>
                    Initially, we decided to create two sides of our application, one pertaining to Volunteers and the other to organizations that provide these opportunities. Through this process, we realized that to do justice to our project given the timeline it would be unviable to design for both sides and hence we refined our application to focus just on Volunteers. This decision was essential in the success of our project.  
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