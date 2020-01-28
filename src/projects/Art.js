import React, { Component } from 'react';
import ArtNight1 from './images/ArtNight1.jpg';
import ArtNight2 from './images/ArtNight2.jpg';
import ArtNight3 from './images/ArtNight3.jpg';
import ArtNight4 from './images/ArtNight4.jpg';
import ArtNight5 from './images/ArtNight5.jpg';
import ArtNight6 from './images/ArtNight6.jpg';
import ArtNight7 from './images/ArtNight7.jpg';
import ArtNight8 from './images/ArtNight8.jpg';
import ArtNight9 from './images/ArtNight9.jpg';
import ArtNight10 from './images/ArtNight10.jpg';
import ArtNight11 from './images/ArtNight11.jpg';
import ArtNight12 from './images/ArtNight12.jpg';
import ArtSketch1 from './images/ArtSketch1.jpg';
import ArtSketch2 from './images/ArtSketch2.jpg';
import ArtPS1 from './images/ArtPS1.jpg';
import ArtPS2 from './images/ArtPS2.jpg';
import ArtSketch3 from './images/ArtSketch3.jpg';
import ArtSketch4 from './images/ArtSketch4.jpg';
import ArtSketch5 from './images/ArtSketch5.jpg';
import ArtSketch6 from './images/ArtSketch6.jpg';
import ArtSketch7 from './images/ArtSketch7.jpg';
import ArtSketch8 from './images/ArtSketch8.jpg';
import ImageGallery from 'react-image-gallery';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy';


const navItems = ["Jesse's Wacky Art Corner"]

class LinkNow extends Component {
  state = {
    showMobileMenu: false,
  }

  render() {
    const { showMobileMenu } = this.state
    const navClass = showMobileMenu ? 'nav' : 'nav hider'

    const ArtNight = [
      {
        original: ArtNight1,
        thumbnail: ArtNight1,
      },
      {
        original: ArtNight2,
        thumbnail: ArtNight2,
      },
      {
        original: ArtNight3,
        thumbnail: ArtNight3,
      },
      {
        original: ArtNight4,
        thumbnail: ArtNight4,
      },
      {
        original: ArtNight5,
        thumbnail: ArtNight5,
      },
      {
        original: ArtNight6,
        thumbnail: ArtNight6,
      },
      {
        original: ArtNight7,
        thumbnail: ArtNight7,
      },
      {
        original: ArtNight8,
        thumbnail: ArtNight8,
      },
      {
        original: ArtNight9,
        thumbnail: ArtNight9,
      },
      {
        original: ArtNight10,
        thumbnail: ArtNight10,
      },
      {
        original: ArtNight11,
        thumbnail: ArtNight11,
      },
      {
        original: ArtNight12,
        thumbnail: ArtNight12,
      },
    ]

    const ArtSketch = [
      {
        original: ArtSketch1,
        thumbnail: ArtSketch1,
      },
      {
        original: ArtSketch2,
        thumbnail: ArtSketch2,
      },
      {
        original: ArtPS1,
        thumbnail: ArtPS1,
      },
      {
        original: ArtSketch3,
        thumbnail: ArtSketch3,
      },
      {
        original: ArtSketch4,
        thumbnail: ArtSketch4,
      },
      {
        original: ArtPS2,
        thumbnail: ArtPS2,
      },
      {
        original: ArtSketch5,
        thumbnail: ArtSketch5,
      },
      {
        original: ArtSketch6,
        thumbnail: ArtSketch6,
      },
      {
        original: ArtSketch7,
        thumbnail: ArtSketch7,
      },
      {
        original: ArtSketch8,
        thumbnail: ArtSketch8,
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
          <div className="row top-content">
            <div className="three columns header-col">
              <h1><span>Arakawa's Apocalypse</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <ImageGallery items={ArtNight} showPlayButton={false} showFullscreenButton={false}/>
                    <p>
                    「後藤さん。警察官として、自衛官として、俺達が守ろうとしているものってのは何なんだろうな。前の戦争から半世紀、俺もあんたも生まれてこの方戦争なんてものは経験せずに生きてきた。平和……俺達が守るべき平和…だがこの国のこの街の平和とは一体何だ？かつての総力戦とその敗北、米軍の占領政策、ついこの間まで続いていた核抑止による冷戦とその代理戦争。そして今も世界の大半で繰り返されている内戦、民族衝突、武力紛争。そういった無数の戦争によって合成され、支えられてきた血塗れの経済的繁栄。それが俺達の平和の中身だ。戦争への恐怖に基づくなりふり構わぬ平和。正当な代価を余所の国の戦争で支払い、その事から目を逸らし続ける不正義の平和……」
                    </p>
                    <p>
                    「そんなきな臭い平和でもそれを守るのが俺達の仕事さ。不正義の平和だろうと正義の戦争より余程マシだ。」
                    </p>
                    <p>
                    「あんたが正義の戦争を嫌うのはよく分かるよ。かつてそれを口にした連中にろくな奴はいなかったし、その口車に乗って酷い目にあった人間のリストで歴史の図書館は一杯だからな。だがあんたは知ってる筈だ。正義の戦争と不正義の平和の差はそう明瞭なものじゃない。平和という言葉が嘘吐き達の正義になってから俺達は俺達の平和を信じることができずにいるんだ。戦争が平和を生むように、平和もまた戦争を生む…。単に戦争でないというだけの消極的で空疎な平和はいずれ実体としての戦争によって埋め合わされる。そう思ったことはないか？その成果だけはしっかりと受け取っておきながらモニターの向こうに戦争を押し込め、ここが戦線の単なる後方に過ぎないことを忘れる。いや、忘れた振りをし続ける。そんな欺瞞を続けていればいずれは大きな罰が下されると。」
                    </p>
                    <p>
                      The bell strikes twelve, and the sirens trumpet the end.
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <section id="reflection">
          <div className="row bottom-content">
            <div className="three columns header-col">
              <h1><span>Sketches</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                  <p className="info">
                    From Viceroy Li Hung-chang to the magical popcorn, what exactly does Jesse do in his spare time?
                  </p>
                  <p>
                     —— A collection of random artwork featuring media ranging from charcoal to Photoshop.
                  </p>
                  <ImageGallery items={ArtSketch} showPlayButton={false} showFullscreenButton={false}/>
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