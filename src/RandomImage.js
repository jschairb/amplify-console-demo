import React from 'react'
import sadFace1 from './images/michigan-girl-sad-face.gif';
import sadFace2 from './images/pitiful-michigan-fans.jpg';
import sadFace3 from './images/sad-fans-in-rain.gif';
import sadFace4 from './images/Sad-Michigan-fans.jpg';
import osuBanner from './images/osu-banner.gif'

class RandomImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [sadFace1, sadFace2, sadFace3, sadFace4, osuBanner]
    }
  }
  render () {
    return (
      <p id="logo"><img id="randomImage" src={this.state.items[Math.floor(Math.random()*this.state.items.length)]} /></p>
    )
  };
}

export default RandomImage
