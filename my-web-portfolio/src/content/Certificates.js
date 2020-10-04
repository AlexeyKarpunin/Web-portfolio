import React from 'react';
import './content_css/certificates.css';
import CERTIFICATES from './api/certificates';

class Certificates extends React.Component {
  constructor () {
    super();
    this.slaidIndex = 0;
  }

  slaider (obj, index) {
    const arr = Object.values(obj);
    return (
    <img className="slaider" src={arr[index]} alt="from slaider"/>
    )
  }

  render () {
    const {backArrow} = this.props;
    return (
      <article className="container">
        <button className="container__button_back button" onClick={backArrow}>back</button>
        <section>
          <button>left</button>
          <div>
            {this.slaider(CERTIFICATES, this.slaidIndex)}
          </div>
          <button>rigth</button>
        </section>
      </article>
    );
  }
};

export default Certificates;