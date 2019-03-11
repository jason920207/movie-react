import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

class Carousels extends Component {
  render () {
    return (
      <Carousel>
        <div>
          <img src="https://i.imgur.com/BswD8VE.jpg" />
          <p className="legend">New Arrive</p>
        </div>
        <div>
          <img src="https://i.imgur.com/BswD8VE.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://i.imgur.com/BswD8VE.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    )
  }
}

export default Carousels
