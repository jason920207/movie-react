import React, { Fragment } from 'react'
import { Comment } from 'semantic-ui-react'
import Moment from 'react-moment'
import LikeButton from './LikeButton'
const CommentContent = ({ comment, user, movie, setComment }) => (
  <Fragment>
    <Comment>
      <Comment.Avatar src={comment.owner.avatar} />
      <Comment.Content>
        <Comment.Author>{comment.owner.email}</Comment.Author>
        <Comment.Metadata>
          <div><Moment toNow>{comment.updatedAt}</Moment></div>
        </Comment.Metadata>
        <Comment.Text>{comment.text}</Comment.Text>
        {user
          ? <LikeButton key={comment._id} comment={comment} user={user} movie={movie} setComment={setComment} />
          : ''
        }
      </Comment.Content>
    </Comment>
  </Fragment>
)

export default CommentContent
