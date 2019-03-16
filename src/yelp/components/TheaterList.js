import React, { Component } from 'react'
import { Item, Label } from 'semantic-ui-react'
import Star from './Star'

class TheaterList extends Component {
  render () {
    const { theater } = this.props
    return (
      <Item>
        <Item.Image src={ theater.image_url } size='medium'/>
        <Item.Content>
          <Item.Header as='a' href={theater.url}>{theater.name}</Item.Header>
          <Item.Meta>
            { theater.categories.map((category) => (
              <Label key={category.title}>{category.title} </Label>
            ))}
          </Item.Meta>
          <Item.Description>
            <Star rating={theater.rating} review={theater.review_count}/>
            <h5>{theater.display_phone}</h5>
            <h5>{theater.location.address1} {theater.location.city}</h5>
          </Item.Description>
          <Item.Extra>
            { /* <Button primary floated='right'>
              Buy tickets
              <Icon name='right chevron' />
            </Button> */}
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default TheaterList
