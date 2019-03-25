import React, { Component, Fragment } from 'react'
import { Item, Label } from 'semantic-ui-react'
import Star from './Star'
import MapWithAMarker from './googleMap'

class TheaterList extends Component {
  render () {
    const { theater } = this.props
    return (
      <Fragment>
        <Item>
          <Item.Image rounded src={ theater.image_url } size='medium'/>
          <Item.Content>
            <Item.Header as='a' href={theater.url}>{theater.name}</Item.Header>
            <Item.Meta>
              { theater.categories.map((category) => (
                <Label key={category.title}>{category.title} </Label>
              ))}
            </Item.Meta>
            <Item.Description>
              <Star rating={theater.rating} review={theater.review_count}/>
            </Item.Description>
            <Item.Extra floated='right'>
              <h5>{theater.display_phone}</h5>
              <h5>{theater.location.address1}</h5>
              <h5>{theater.location.city}</h5>
              <MapWithAMarker
                googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAvdlALqHeitBXQa71P48T2p9-0K6v-Uio&v=3.exp&libraries=geometry,drawing,places'}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '300px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                coordinates={theater.coordinates}
              />
              { /* <Button primary floated='right'>
              Buy tickets
              <Icon name='right chevron' />
            </Button> */}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Fragment>
    )
  }
}

export default TheaterList
