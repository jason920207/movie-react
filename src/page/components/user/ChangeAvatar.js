import React, { Component } from 'react'
import { Header, Image, Grid, Button, Modal } from 'semantic-ui-react'
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
          <Modal trigger={ <Image as='a' src='https://s3.us-east-2.amazonaws.com/jasonbucket/10455766_657348364314222_7463937380643555250_n1.jpg' size='tiny'
            onClick={() => this.onChange('https://s3.us-east-2.amazonaws.com/jasonbucket/10455766_657348364314222_7463937380643555250_n1.jpg'
            )}/>}>
            <Modal.Header>Congratulations!!! WDI 29 We are Full-Stack Developer Now</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UE4KZG19V-46c37489cd11-72' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UEFDH6WTU-bba1a1564691-72' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UDA5HKX6D-63ea49c766bd-48' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UEF84T9RP-69f2a88681e2-72' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UEKR6DX8V-e129427305d6-48' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UERBED738-514935bf7395-48' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UEBGER9MW-0a4545293eab-48' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UEMQNLMPT-9c4c4244a452-48' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UEDAWFK3L-6ac420ff825e-48' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UED5SF5CJ-69bf08ea69ec-48' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UECCXGRM3-7c7571db58ee-48' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UDQGB5K2B-8fe2b19b785c-72' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UE6F03ZLG-68f229ab08c8-48' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UD9AXJ2GK-01dcebb33fae-48' />
              <Image wrapped size='tiny' src='https://ca.slack-edge.com/T0351JZQ0-UEMFU8TJ6-781578796585-48' />
            </Modal.Content>
            <h3>Thank these instructor Who taught Us</h3>
            <Modal.Content image>
              <Image wrapped size='small' src='https://ca.slack-edge.com/T0351JZQ0-U0J1RU5L7-1a5a21ae9482-48' />
              <Image wrapped size='small' src='https://ca.slack-edge.com/T0351JZQ0-U5L8X40RK-f0ff2695b94b-48' />
              <Image wrapped size='small' src='https://ca.slack-edge.com/T0351JZQ0-UCQNKTXJ5-59ff2921bc97-48' />
              <Image wrapped size='small' src='https://ca.slack-edge.com/T0351JZQ0-U4K83ETFD-887c5fa1afb3-48' />
              <Image wrapped size='small' src='https://ca.slack-edge.com/T0351JZQ0-UCL8B38F3-31b67e7c7bb9-48' />
              <Image wrapped size='small' src='https://ca.slack-edge.com/T0351JZQ0-U3G1MK508-09cf9ffd8851-72' />
              <Image wrapped size='small' src='https://ca.slack-edge.com/T0351JZQ0-U0J943EQ4-632761ad9480-48' />
              <Image wrapped size='small' src='https://ca.slack-edge.com/T0351JZQ0-U2D9D0GAG-dcc201fcd012-48' />
              <Image wrapped size='small' src='https://ca.slack-edge.com/T0351JZQ0-UA0NPAWKH-771a70b0a2c0-72' />
            </Modal.Content>
          </Modal>
        </Grid>
      </div>

    )
  }
}

export default withRouter(ChangeAvatar)
