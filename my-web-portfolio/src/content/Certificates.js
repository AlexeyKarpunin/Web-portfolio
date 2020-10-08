import React from 'react';
import './content_css/certificates.css';
import Slaider from './Slaider';
import '../css/button.css'

class Certificates extends React.Component {
  constructor () {
    super();
    this.slaidIndex = 0;
  }
  render () {
    const {backArrow} = this.props;
    return (
      <article className="container">
        <div onClick={backArrow} class="container__button_back button_back">
            <div></div>
        </div>
        <section>
          <Slaider/>
        </section>
      </article>
    );
  }
};

export default Certificates;