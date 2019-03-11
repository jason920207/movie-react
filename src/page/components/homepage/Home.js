import React, { Fragment } from 'react'
import Carousels from './Carousels'
import HomeMovie from './HomeMovie'
const Home = () => (
  <Fragment>
    <div className ="container">
      <Carousels />
      <HomeMovie />
    </div>
  </Fragment>
)

export default Home
