import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import CommentContent from './CommentContent'
import { createComment, getCommentByMovie } from '../../api'
import { withRouter, Link } from 'react-router-dom'
class MovieComment extends Component {
  constructor () {
    super()
    this.state = {
      comments: null,
      commentInput: ''
    }
    this.onChangeHandle = this.onChangeHandle.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeLike = this.onChangeLike.bind(this)
  }

  onChangeHandle (event) {
    this.setState({ commentInput: event.target.value })
  }

  setComment = (comments) => this.setState({ comments })

  onSubmit (event) {
    event.preventDefault()
    const { user, movie } = this.props
    createComment(user, movie, this.state.commentInput)
      .then(() => getCommentByMovie(this.props.user, this.props.movie))
      .then(res => this.setState({ comments: res.data.comments }))
      .then(() => this.setState({ commentInput: '' }))
  }

  onChangeLike () {
    getCommentByMovie(this.props.user, this.props.movie)
      .then((res) => {
        this.setState({ comments: res.data.comments
        })
      })
  }

  componentDidMount () {
    getCommentByMovie(this.props.user, this.props.movie)
      .then((res) => {
        this.setState({ comments: res.data.comments
        })
      })
  }

  render () {
    const { user, movie } = this.props
    const { comments, commentInput } = this.state
    return (
      <Comment.Group size='large'>
        <Header as='h3' dividing>
          Comments
        </Header>
        { comments
          ? comments.map((comment) => (
            <CommentContent key={comment._id}
              comment={comment}
              user={user}
              comments={comments}
              movie={movie}
              setComment={this.setComment}
              onChangeLike={this.onChangeLike}/>
          ))
          : <h4>Loading</h4>
        }
        { user
          ? (<Form reply onSubmit={this.onSubmit}>
            <Form.TextArea required onChange={this.onChangeHandle} value={commentInput} name='comment' />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>)
          : (<Link className="btn btn-primary" to="/sign-in">Please Sign In To Comment</Link>)
        }
      </Comment.Group>
    )
  }
}

export default withRouter(MovieComment)
