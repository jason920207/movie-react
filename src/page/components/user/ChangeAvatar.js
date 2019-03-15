import React, { Component } from 'react'
import { Header, Image, Grid, Button } from 'semantic-ui-react'
import { updateAvatar, getUser } from '../../api'
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
    const { user, history, setUser } = this.props
    const { avatar } = this.state
    updateAvatar(user, avatar)
      .then(() => getUser(user))
      .then(res => setUser(res.data.user))
      .then(() => history.push('/movies'))
  }

  render () {
    const { user } = this.props
    const { avatar } = this.state
    const imageurl = [
      'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
      'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/tou-xiang-su-cai-2.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/kisspng-avatar-discord-youtube-reddit-vector-shading-5ae1f3978d6100.3782264015247573995791.png',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/kisspng-discord-google-play-download-debut-5b116e2ca08c73.7171333715278689726576.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/kisspng-cartoon-ton-discord-clip-art-twitch-emotes-5b2d7242f395c3.3397523415297050269977.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/kisspng-super-mario-odyssey-mario-bros-super-mario-sunshi-mario-5ad59330b3c304.8246767315239462887363.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/1-160430203152.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/1-160430203152-52.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/1-160430203152-50.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/1-160430203151.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/1-160430203151-54.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/1-160430203151-53.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/1-160430203151-52.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/1-160430203151-51.jpg',
      'https://s3.us-east-2.amazonaws.com/jasonbucket/1-160430203151-50.jpg'
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
        <Grid doubling columns={10}>
          {imageurl.map((image) => (
            <Grid.Column key={image}>
              <Image src={image} size='tiny'
                onClick={() => this.onChange(image)}/>
            </Grid.Column>
          ))
          }
          <Image as='a' src='https://s3.us-east-2.amazonaws.com/jasonbucket/tenor.gif' size='tiny'
            onClick={() => this.onChange('https://s3.us-east-2.amazonaws.com/jasonbucket/tenor.gif'
            )} href='https://jason920207.github.io/tic-tac-toe/'/>
        </Grid>
      </div>

    )
  }
}

export default withRouter(ChangeAvatar)
