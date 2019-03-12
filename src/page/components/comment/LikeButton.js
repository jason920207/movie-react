import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { updateCommentLike } from '../../api'
class CommentLikeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: null
    }
    this.onClickLike = this.onClickLike.bind(this)
    this.onClickUnlike = this.onClickUnlike.bind(this)
  }

  onClickLike () {
    console.log(this.props.comment)
    console.log(this.props.movie)
    // const { comment, movie, user } = this.props
    const { comment, user } = this.props
    const likeList = comment.likes.filter((like) => like === user)
    if (likeList) {
      console.log('already have')
    } else {
      const myLikesList = [...comment.likes, user._id]
      console.log(myLikesList)
    }
    // updateCommentLike()
  }

  onClickUnlike () {
    console.log(this.props.comment)
    console.log(this.props.movie)
  }

  render () {
    const { like, unlike } = this.props.comment
    const { user } = this.props
    console.log(like)
    console.log(unlike)
    console.log(user)
    return (
      <div>
        <Button
          content='Like'
          icon='heart'
          label={{ as: 'a', basic: true, content: like ? `${like.length}` : '0' }}
          labelPosition='right'
          onClick={this.onClickLike}
        >
        </Button>
        <Button
          content='Unlike'
          icon='heart'
          label={{ as: 'a', basic: true, pointing: 'right', content: unlike ? `${like.length}` : '0' }}
          labelPosition='left'
          onClick={this.onClickUnlike}
        />
      </div>
    )
  }
}

export default CommentLikeButton
