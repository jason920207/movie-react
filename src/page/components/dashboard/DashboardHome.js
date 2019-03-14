import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class DashboardHome extends Component {
  render () {
    return (
      <div className='container'>
        <Image src='https://s3.us-east-2.amazonaws.com/jasonbucket/welcome.jpg' size='huge' centered />
      </div>
    )
  }
}

export default DashboardHome
