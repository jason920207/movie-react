import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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

  render () {
    const { classes, movie } = this.props

    return (
      <div className='col-md-3 col-sm-6'>
        <Card className={classes.card}>
          <Link to={`/movies/${movie._id}`}>
            <CardMedia
              className={classes.media}
              image={movie.imageUrl}
              title="Paella dish"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to={`/movies/${movie._id}`}>{movie.title}(<Moment format="YYYY">{movie.publishDate}</Moment>)</Link>
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              <Star />
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography component="p">
                {movie.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RecipeReviewCard)
