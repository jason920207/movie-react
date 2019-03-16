import React, { Component, Fragment } from 'react'
import { Button, Form, Segment, Item } from 'semantic-ui-react'
import { postLocation } from '../api'
import TheaterList from './TheaterList'

class YelpSearch extends Component {
  constructor () {
    super()
    this.state = {
      location: null,
      theaters: null
    }
    this.onChangeHandle = this.onChangeHandle.bind(this)
    this.onSubmitHandle = this.onSubmitHandle.bind(this)
  }

  onChangeHandle (event) {
    this.setState({ location: event.target.value })
  }

  onSubmitHandle (event) {
    postLocation(this.state.location)
      .then(res => {
        console.log(res.data.theater)
        return res
      })
      .then(res => this.setState({ theaters: res.data.theater }))
      .then(() => console.log(this.state.theaters))
  }

  render () {
    const { theaters } = this.state
    return (
      <Fragment>
        <Segment inverted>
          <Form inverted onSubmit={this.onSubmitHandle}>
            <Form.Input
              name="location"
              label='Location'
              onChange= {this.onChangeHandle}
              placeholder='Examples: "New York City", "NYC", "350 5th Ave, New York, NY 10118"' />
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
        <div className='container'>
          <Item.Group divided>
            { theaters
              ? theaters.map(theater =>
                <TheaterList key={theater.id} theater={theater}/>
              )
              : ''
            }
          </Item.Group>
        </div>
      </Fragment>
    )
  }
}

export default YelpSearch
