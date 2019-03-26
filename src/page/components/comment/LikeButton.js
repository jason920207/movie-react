import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { updateCommentLike, getComment, updateCommentUnlike } from '../../api'
import { withRouter } from 'react-router-dom'

class CommentLikeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: null,
      likes: props.comment.likes,
      unlikes: props.comment.unlikes
    }
    this.onClickLike = this.onClickLike.bind(this)
    this.onClickUnlike = this.onClickUnlike.bind(this)
  }

  onClickLike () {
    // const { comment, movie, user } = this.props
    const { comment, user } = this.props
    const CheckLikeList = comment.likes.filter((like) => like === user._id)
    if (CheckLikeList.length) {
    } else {
      const newLikesList = [...comment.likes, user._id]
      updateCommentLike(user, comment._id, newLikesList)
        .then(() => getComment(comment._id))
        .then(res => this.setState({ likes: res.data.comment.likes }))
        .then(() => this.props.onChangeLike())
    }
  }

  onClickUnlike () {
    const { comment, user } = this.props
    const CheckUnlikeList = comment.unlikes.filter((unlike) => unlike === user._id)
    if (CheckUnlikeList.length) {
    } else {
      const newUnlikesList = [...comment.unlikes, user._id]
      updateCommentUnlike(user, comment._id, newUnlikesList)
        .then(() => getComment(comment._id))
        .then(res => this.setState({ unlikes: res.data.comment.unlikes }))
    }
  }

  render () {
    const { likes, unlikes } = this.state
    const { user } = this.props
    const likeButtonStatus = likes.includes(user._id)
    const unlikeButtonStatus = unlikes.includes(user._id)

    return (
      <div>
        {
          likeButtonStatus
            ? (<Button
              color='red'
              content='Like'
              icon='heart'
              label={{ as: 'a', basic: true, content: likes ? `${likes.length}` : '0' }}
              labelPosition='right'
              onClick={this.onClickLike}
              disabled
            />)
            : (<Button
              content='Like'
              icon='heart'
              label={{ as: 'a', basic: true, content: likes ? `${likes.length}` : '0' }}
              labelPosition='left'
              onClick={this.onClickLike}
            />)
        }

        {unlikeButtonStatus
          ? (<Button
            color='red'
            content='Unlike'
            icon='heart'
            label={{ as: 'a', basic: true, content: likes ? `${likes.length}` : '0' }}
            labelPosition='right'
            onClick={this.onClickLike}
            disabled
          />)
          : (<Button
            content='Unlike'
            icon='heart'
            label={{ as: 'a', basic: true, pointing: 'right', content: unlikes ? `${unlikes.length}` : '0' }}
            labelPosition='left'
            onClick={this.onClickUnlike}
          />)
        }
      </div>
    )
  }
}

export default withRouter(CommentLikeButton)
