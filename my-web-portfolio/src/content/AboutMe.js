import React from 'react';
import './content_css/aboutme.css'
import {text} from './text_content/text'
import myFace from '../img/myFace.png'

const LANGUAGES = {
  rus: 'rus',
  eng: 'eng'
}

class AboutMe extends React.Component {
  constructor () {
    super ();
    this.state = {
      language: text[LANGUAGES.eng],
    }
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage (lang) {
    this.setState({language: text[lang]})
  }

  render () {
    const {backArrow} = this.props;
    return (
      <article className="container">
        <button className="container__button_back button" onClick={backArrow}>back</button>
        <button className="container__button_eng button" onClick={this.changeLanguage.bind(this, LANGUAGES.eng)}>Eng</button>
        <button className="container__button_rus button" onClick={this.changeLanguage.bind(this, LANGUAGES.rus)}>Rus</button>
        <div className="container__text">
          <img className="container__img_my_face" src={myFace} alt="my face"/>
          <p>{this.state.language}</p>
        </div>
      </article>
    )
  }
}

export default AboutMe;