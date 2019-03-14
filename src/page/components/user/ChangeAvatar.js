import React, { Component } from 'react'
import { Header, Image, Grid, Button } from 'semantic-ui-react'
import { updateAvatar } from '../../api'
import { Link, withRouter } from 'react-router-dom'

class ChangeAvatar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      avatar: props.user.avatar
    }
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange (image) {
    this.setState({ avatar: image })
  }

  onSave () {
    const { user, history } = this.props
    const { avatar } = this.state
    updateAvatar(user, avatar)
      .then(() => history.push('/movies'))
  }

  render () {
    const { user } = this.props
    const { avatar } = this.state
    const imageurl = [
      'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
      'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
    ]
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Image circular src={avatar} />
          <Header.Content>{user.email}</Header.Content>
          <Button.Group>
            <Button><Link to="/movies">Cancel</Link></Button>
            <Button.Or />
            <Button positive onClick={this.onSave}>Save</Button>
          </Button.Group>
        </Header>
        <Grid doubling columns={5}>
          {imageurl.map((image) => (
            <Grid.Column key={image}>
              <Image src={image}
                onClick={() => this.onChange(image)}/>
            </Grid.Column>
          ))
          }
        </Grid>
      </div>

    )
  }
}

export default withRouter(ChangeAvatar)
