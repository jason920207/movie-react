import React, { Fragment } from 'react'
import { Comment } from 'semantic-ui-react'
import Moment from 'react-moment'
import LikeButton from './LikeButton'
const CommentContent = ({ comment, user, movie }) => (
  <Fragment>
    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author>{comment.owner.email}</Comment.Author>
        <Comment.Metadata>
          <div><Moment toNow>{comment.updatedAt}</Moment></div>
        </Comment.Metadata>
        <Comment.Text>{comment.text}</Comment.Text>
        {user
          ? <LikeButton comment={comment} user={user} movie={movie}/>
          : ''
        }
      </Comment.Content>
    </Comment>
  </Fragment>
)

export default CommentContent
