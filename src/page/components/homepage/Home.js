import React, { Fragment } from 'react'
import Carousels from './Carousels'
import HomeMovie from './HomeMovie'
import { Header, Icon } from 'semantic-ui-react'

const Home = () => (
  <Fragment>
    <div className ="container">
      <Carousels />
      <Header as='h2'>
        <Icon name='film' />
        <Header.Content>Movie</Header.Content>
      </Header>
      <HomeMovie />
    </div>
  </Fragment>
)

export default Home
