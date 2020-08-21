import React, { Component } from 'react';
import logo from './images/Long_Transit_logo.png';
import introduction from './images/TransitIntro.jpg';
import Transitlogo from './images/Transitlogo.png';
import Transitlogosketch from './images/Transitlogosketch.png';
import Transitmap from './images/Transitmap.png';
import Transitcard from './images/Transitcard.png';
import TransitColour from './images/TransitColour.png';
import TransitTypo from './images/TransitTypo.png';
import Transitmockup1 from './images/Transitmockup1.png';
import Transitmockup2 from './images/Transitmockup2.png';
import Transitmockup3 from './images/Transitmockup3.png';
import Transitflow from './images/Transitflow.png';
import Transitmobilesketch1 from './images/Transitmobilesketch1.png';
import Transitmobilesketch2 from './images/Transitmobilesketch2.png';
import Transitmobilesketch3 from './images/Transitmobilesketch3.png';
import Transitkiosksketch1 from './images/Transitkiosksketch1.png';
import Transitkiosksketch2 from './images/Transitkiosksketch2.png';
import Transitkiosksketch3 from './images/Transitkiosksketch3.png';
import Transitmobilelofi1 from './images/Transitmobilelofi1.png';
import Transitmobilelofi2 from './images/Transitmobilelofi2.png';
import Transitmobilelofi3 from './images/Transitmobilelofi3.png';
import Transitkiosklofi1 from './images/Transitkiosklofi1.png';
import Transitkiosklofi2 from './images/Transitkiosklofi2.png';
import Transitkiosklofi3 from './images/Transitkiosklofi3.png';
import Transitmobilehifi1 from './images/Transitmobilehifi1.png';
import Transitmobilehifi2 from './images/Transitmobilehifi2.png';
import Transitmobilehifi3 from './images/Transitmobilehifi3.png';
import Transitkioskhifi1 from './images/Transitkioskhifi1.png';
import Transitkioskhifi2 from './images/Transitkioskhifi2.png';
import Transitkioskhifi3 from './images/Transitkioskhifi3.png';


import ImageGallery from 'react-image-gallery';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy';


const navItems = ['introduction', 'research', 'ideation', 'prototype', 'reflection']

class Transit extends Component {
  state = {
    showMobileMenu: false,
  }

  render() {
    const { showMobileMenu } = this.state
    const navClass = showMobileMenu ? 'nav' : 'nav hider'

    const mockups = [
      {
        original: Transitmockup1,
        thumbnail: Transitmockup1,
      },
      {
        original: Transitmockup2,
        thumbnail: Transitmockup2,
      },
      {
        original: Transitmockup3,
        thumbnail: Transitmockup3,
      },
    ]

    const mobilesketch = [
      {
        original: Transitmobilesketch1,
        thumbnail: Transitmobilesketch1,
      },
      {
        original: Transitmobilesketch3,
        thumbnail: Transitmobilesketch3,
      },
      {
        original: Transitmobilesketch2,
        thumbnail: Transitmobilesketch2,
      },
    ]

    const kiosksketch = [
      {
        original: Transitkiosksketch1,
        thumbnail: Transitkiosksketch1,
      },
      {
        original: Transitkiosksketch2,
        thumbnail: Transitkiosksketch2,
      },
      {
        original: Transitkiosksketch3,
        thumbnail: Transitkiosksketch3,
      },
    ]

    const mobilelofi = [
      {
        original: Transitmobilelofi1,
        thumbnail: Transitmobilelofi1,
      },
      {
        original: Transitmobilelofi2,
        thumbnail: Transitmobilelofi2,
      },
      {
        original: Transitmobilelofi3,
        thumbnail: Transitmobilelofi3,
      },
    ]

    const kiosklofi = [
      {
        original: Transitkiosklofi1,
        thumbnail: Transitkiosklofi1,
      },
      {
        original: Transitkiosklofi2,
        thumbnail: Transitkiosklofi2,
      },
      {
        original: Transitkiosklofi3,
        thumbnail: Transitkiosklofi3,
      },
    ]

    const mobilehifi = [
      {
        original: Transitmobilehifi1,
        thumbnail: Transitmobilehifi1,
      },
      {
        original: Transitmobilehifi2,
        thumbnail: Transitmobilehifi2,
      },
      {
        original: Transitmobilehifi3,
        thumbnail: Transitmobilehifi3,
      },
    ]

    const kioskhifi = [
      {
        original: Transitkioskhifi1,
        thumbnail: Transitkioskhifi1,
      },
      {
        original: Transitkioskhifi2,
        thumbnail: Transitkioskhifi2,
      },
      {
        original: Transitkioskhifi3,
        thumbnail: Transitkioskhifi3,
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
                      Public transit in Seatte is a vast network consisting of seperate public transporation agencies and a variety of land- and sea-based vehicles, serving a wide range of both local and visiting users. As an exercise to explore and examine approaches, techniques, and concepts for the design and visualization of information systems, I set out to <b style={{color: "#11ABB0"}}>design a new, cohesive visual system for Seattle transit on both digital and environmental platforms,</b> including mobile app and kiosk interfaces, directional signs, maps, and transit cards.
                  </p>
                    <img src={introduction} title="Introduction" alt="in" style={{ marginBottom: 30 }} />
                  <p>
                      This project was completed over nine weeks by myself as part of an Advanced Special Topics workshop in the Human Centered Design &amp; Engineering department at the University of Washington in Summer 2020.
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
                    <h3>Design Research</h3>
                    <p>
                      I begin my background research by identifying the audience, the purpose, the visual platforms of Seattle's transit system, before diving deeper into secondary sources on its design history and current visual system. I ask myself: What is working? What are its strengths and weaknesses? How easy is it to find information? And how is it from an outsider's perspective? Although the current visual system is professional and comprehensive, there still exists a range of pain point (e.g. the lack of scheduling information on most platforms). In my assessment, I point out that Seattle transit is only easy to use for users already familiar with it.
                    </p>
                    <h3>Competitive Analysis</h3>
                    <p>
                      I make two separate case studies on New York City Transit and Beijing Subway's visual systems to see how other cities in and out of the US organize information visualization. I also look into a range of different public transit, rideshare, navigation, and payment apps for current design trends on mobile interface for transportation services.
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
                  <h3>Colour &amp; Typography</h3>
                    <p>
                      Based on my research findings, I devise a visual system emphasizing clarity in function and freshness in style. For colour, I choose a dash of greenish cyan as accent, with a lighter shade for secondary highlight. The choice of colour both reflects the Pacific Northwest landscape as well as Seattle’s identity as the “Emerald City,” not to mention being visually striking when employed in moderation. Overall, this is an unqiue colour scheme that adds character to the interface both visually and thematically. 
                    </p>
                    <img src={TransitColour} title="Colour Scheme" alt="cs" style={{ marginBottom: 30 }} />
                    <p>
                     For typography, I select two humanist sans-serif typefaces for their on-screen legibility: Lato for headings and light Open Sans for body text.
                    </p>
                    <img src={TransitTypo} title="Typographic Choices" alt="tc" style={{ marginBottom: 30 }} />
                    <h3>Logo</h3>
                    <p>
                      I move on to develop half a dozen distinct directions for a new logo, and finally decide on a stylized brandmark as the strategic direction after a series of variations.
                    </p>
                    <img src={Transitlogosketch} title="Logo Sketches" alt="ls" style={{ marginBottom: 30 }} />
                    <p>
                      The logo is a stylized rendering of a seat by the window. Although Seattle transit is composed of a vast variety of vehicles, a passenger seat is an ubiquitous feature for all and thus inclusive of all services, better representing the entire transit system as a whole.
                    </p>
                    <img src={Transitlogo} title="Logo" alt="lg" style={{ marginBottom: 30 }} />
                    <h3>Assets</h3>
                    <p>
                      For the first implementations of my colour and typography system, I design a new transit map for Seattle's current Link light rail system and a transit card (ORCA card). Following the general design principle of clarity and freshness, I take a minimalist approach and render the Seatte area map in sharp, almost isometric shapes, while the ORCA card features an enlarged version of the logo.
                    </p>
                    <img src={Transitmap} title="Map" alt="mp" style={{ marginBottom: 30 }} />
                    <img src={Transitcard} title="ORCA Card" alt="cd" style={{ marginBottom: 30 }} />
                    <h3>Mockups</h3>
                    <p>
                      Having solidified the visual style in practice, I then create a short series of in-situation mockups. As the physical environment is a major facet of this design exercise, I have to make sure the visual works for all collaterals. 
                    </p>
                    <ImageGallery items={mockups} showPlayButton={false} showFullscreenButton={false}/>
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
                    <h3>User Flows</h3>
                    <p>
                      Moving on from the physical to the digital, I begin constructing userflows for a mobile app interface and a station kiosk interface that will conform to the new visual system. The all-in-one navigation and payment app especially can become a useful stopgap in addressing the current lack of scheduling information. Instead of looking for schedule cards that are usually not at all existant at bus stops, users can simply open the transit app to see live arrival and departure times.
                    </p>
                    <img src={Transitflow} title="User Flows" alt="uf" style={{ marginBottom: 30 }} />
                    <h3>Paper Sketches</h3>
                    <p>
                      I then sketch out the user flows on paper to better visualize the key frames and play around with different UI approaches. In order to ensure clarity in function, I try to limit each flow to no more than three screens from the home/landing page.
                    </p>
                    <h6>Mobile Sketches</h6>
                    <ImageGallery items={mobilesketch} showPlayButton={false} showFullscreenButton={false}/>
                    <h6>Kiosk Sketches</h6>
                    <ImageGallery items={kiosksketch} showPlayButton={false} showFullscreenButton={false}/>
                    <h3>Wireframes</h3>
                    <p>
                      Next I create a series of low-fidelity wireframes for both interfaces after initial sketching and whiteboarding. Before applying the final layer of visual system I have to decide on the general UI layout. Considering the user base (mostly local daily commuters and visiting tourists) and their particular demand of the transit system, interface clarity is essential for ease of use. I thus choose to employ a mostly white background with light drop shadow; coupled with a sparing placement of feature elements, the interface as a whole is clean and very easy to navigate.
                    </p>
                    <h6>Mobile Wireframes</h6>
                    <ImageGallery items={mobilelofi} showPlayButton={false} showFullscreenButton={false}/>
                    <h6>Kiosk Wireframes</h6>
                    <ImageGallery items={kiosklofi} showPlayButton={false} showFullscreenButton={false}/>
                    <h3>Mockups</h3>
                    <p>
                      After rounds of iteration based on critique feedback, I finally move to apply my visual system and upgrade the low-fidelity wireframes into high-fidelity mockups.
                    </p>
                    <h6>Mobile Mokcups</h6>
                    <ImageGallery items={mobilehifi} showPlayButton={false} showFullscreenButton={false}/>
                    <h6>Kiosk Mockups</h6>
                    <ImageGallery items={kioskhifi} showPlayButton={false} showFullscreenButton={false}/>
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
                    This has been the most comprehensive visual design project I have ever undertaken, tackling a variety of different design areas from brand design, physical product design, to interface design. <b>I am no longer designing one or two things,</b> <b style={{color: "#11ABB0"}}>but a whole system that transcends both the physical and digital platforms.</b> Throughout the design process, I have to grapple with maintaining visual cohesion over a wide range of assets while also keeping each individual one clearly infromative and visually appealing; considering the relatively short amount of time and the fact I have been working by myself, this is no easy task. In the end, however, I think I accomplished the task exceeding my original expectations. Given more time, I would have liked to further tie all design elements together and organize a detailed brand style guide to ensure cross-platform consistency and future sustainability.
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

export default Transit;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}