import React from 'react';

class MemojiGame extends React.Component {
 
  render(){
    const {backArrow} = this.props;
    return (
      <article>
        <button className="container__button_back button" onClick={backArrow}>back</button>
        
      </article>
    )
  }
}

export default MemojiGame;