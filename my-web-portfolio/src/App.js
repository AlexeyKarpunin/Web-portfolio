import React from 'react';
import './css/start_page.css';
import './css/section_link.css';
import aboutMe from './img/aboutme.png'
import memoji from './img/memojigame.png'
import certificates from './img/books.png'
import AboutMe from './content/AboutMe'
import Certificates from './content/Certificates';
import MemojiGame from './content/MemojiGame';


const CONTENT = {
  aboutMe: 'about me',
  memojiGame: 'memojiGame',
  certificates: 'certificates'
}


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      content: undefined,
    }
    this.back = () => this.setState({content: undefined});

    this.chooseContent = this.chooseContent.bind(this);
    this.receiveContent = this.receiveContent.bind(this)
    this.handelClick = this.handelClick.bind(this);
  }

  receiveContent (content) {
    const backArrow = this.back;

    switch (content) {
      case CONTENT.aboutMe:
        return <AboutMe {...{backArrow}}/>
      case CONTENT.memojiGame:
        return <MemojiGame {...{backArrow}}/>
      case CONTENT.certificates:
        return <Certificates {...{backArrow}}/>  
      default:
        return <div>EROR</div>
    }
  } 

  chooseContent () {
    return (
      <section className="section__link">
        <div className="section__link__about_me">
          <img data-info={CONTENT.aboutMe}  className="about__me_img" src={aboutMe} alt="info about me"/>
        </div>
        <div className="section__link__memoji_game">
          <img data-info={CONTENT.memojiGame} className="memoji__game_img" src={memoji} alt="memoji game"/>
        </div>
        <div className="section__link__certificates">
          <img data-info={CONTENT.certificates} className="certificates_img" src={certificates} alt="certificates"/>
        </div>
      </section>
    )
  }

  handelClick (e) {
    if (e.target.hasAttribute('data-info')) {
      const target = e.target.getAttribute('data-info');
      this.setState({content: target});
    }
  }

  render () {
    return ( 
    <div className="start__page">
      <header className="start__page__header">
           <h1>Web-portfolio</h1>
      </header>
      <article className="start__page__information" onClick={this.handelClick}>
        { this.state.content ? this.receiveContent(this.state.content) : this.chooseContent() }
      </article>
      <footer className="footer"></footer>
    </div>
    )
  }
}

export default App;
