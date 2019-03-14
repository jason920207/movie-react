import React, { Fragment } from 'react'
import { Rating } from 'semantic-ui-react'

const RatingStar = ({ imdbRating }) => (
  <Fragment>
    <Rating icon='star' defaultRating={parseFloat(imdbRating)} maxRating={10} disabled/>{imdbRating}
  </Fragment>
)

export default RatingStar
