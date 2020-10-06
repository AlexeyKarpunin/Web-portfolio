import React from 'react';
import CERTIFICATES from './api/certificates';

class Slaider extends React.Component {
  constructor () {
    super();
    this.certificates = Object.values(CERTIFICATES);
    this.state = {
      mover: "slaider_controller",
      counter: 0,
    }
    this.movePicture = this.movePicture.bind(this);
  }

  movePicture (e) {

    if (e.target.classList.contains("slaider__button__left")) {
      if (this.state.counter === 0) return;

      this.setState( (state) => {
        return {
          counter: state.counter += 350,
          mover: "slaider_controller" + 
          " M" + String(state.counter).replace("-", "")
        }
      })
    }
  
    if (e.target.classList.contains("slaider__button__right")) {
      if (Math.abs(this.state.counter) === (this.certificates.length - 1) * 700) return;

      this.setState( (state) => {
        return {
          counter: state.counter -= 350,
          mover: "slaider_controller" + 
          " M" + String(state.counter).replace("-", "")
        }
      })
    }
  }  

  ImgList (props) {
    const imgArr = props.img; 
    const imgList = imgArr.map( (img, index) => <img key={index} className="img__size" src={img} alt="from slaider"/>);

  return <div className="slaider__item">{imgList}</div>
  }

  render () {
    const {mover} = this.state;
      return (
        <div className="slaider">
          <button className="slaider__button__left" onClick={this.movePicture}>left</button>
          <div className="slaider__items">
              <div className={mover}>
                   <this.ImgList img = {this.certificates}/>
              </div>
          </div>
          <button className="slaider__button__right" onClick={this.movePicture}>rigth</button>
        </div>
      )
    }
};

export default Slaider;