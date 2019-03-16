import React, { Fragment } from 'react'
import { Rating } from 'semantic-ui-react'

const RatingStar = ({ rating, review }) => (
  <Fragment>
    <Rating icon='star' defaultRating={parseFloat(rating)} maxRating={5} disabled/> {review} reviews
  </Fragment>
)

export default RatingStar
