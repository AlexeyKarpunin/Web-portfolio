import React from 'react';
import './content_css/certificates.css';
import Slaider from './Slaider';

class Certificates extends React.Component {
  constructor () {
    super();
    this.slaidIndex = 0;
  }
  render () {
    const {backArrow} = this.props;
    return (
      <article className="container">
        <button className="container__button_back button" onClick={backArrow}>back</button>
        <section>
          <Slaider/>
        </section>
      </article>
    );
  }
};

export default Certificates;