import React from 'react'
import { Item, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Star from './Star'
import Moment from 'react-moment'

const ItemExampleDivided = ({ movie }) => (
  <Item.Group divided>
    <Item>
      <Item.Image src={movie.imageUrl} />
      <Item.Content>
        <Item.Header><Link to={`/movies/${movie._id}`}>{movie.title}</Link></Item.Header>
        <Item.Meta>
          <Star imdbRating={movie.imdbRating} />
        </Item.Meta>
        <Item.Meta>
          Release Dates: <Moment format="YYYY-MM-DD">{movie.publishDate}</Moment>
        </Item.Meta>
        <Item.Description>{movie.description}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleDivided
