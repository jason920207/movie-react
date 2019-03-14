import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
// import CardActions from '@material-ui/core/CardActions'
// import Collapse from '@material-ui/core/Collapse'
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import Star from '../Star'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '125%'
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
})

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  };

  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  componentWillMount () {
    const { movie } = this.props
    this.setState({ title: movie.title.slice(0, 15) })
  }

  render () {
    const { classes, movie } = this.props
    const { title } = this.state

    return (
      <div className='col-md-3 col-sm-6'>
        <Card className={classes.card} >
          <Link to={`/movies/${movie._id}`}>
            <CardMedia
              className={classes.media}
              image={movie.imageUrl}
              title={movie.title}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              <Link to={`/movies/${movie._id}`}>{title}(<Moment format="YYYY">{movie.publishDate}</Moment>)</Link>
            </Typography>
            <Star imdbRating={movie.imdbRating}/>
          </CardContent>
        </Card>
      </div>
    )
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RecipeReviewCard)
