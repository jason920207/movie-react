import React, { Component } from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'
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
            <span className='cinema'>IFC Cinema</span>
          </Item.Meta>
          <Item.Description>
            <Star rating={theater.rating} review={theater.review_count}/>
          </Item.Description>
          <Item.Extra>
            <Button primary floated='right'>
              Buy tickets
              <Icon name='right chevron' />
            </Button>
            { theater.categories.map((category) => (
              <Label key={category.title}>{category.title} </Label>
            ))}
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default TheaterList
