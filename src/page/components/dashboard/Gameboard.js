import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getGame } from '../../api'
import { Icon, Dimmer, Loader, Image, Segment, List } from 'semantic-ui-react'

// import EmbedExampleYouTube from './embed'
// import YoutubeComponent from './YoutubeComponent'
// import { Item } from 'semantic-ui-react'
class GameBoard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      game: null
    }
  }

  componentDidMount () {
    getGame(this.props.user, this.props.match.params.id)
      .then(res => this.setState({ game: res.data.game }))
  }

  render () {
    const { game } = this.state
    console.log(game)
    if (!game) {
      return (<Segment>
        <Dimmer active>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>)
    }

    return (
      <main>
        <div className='moviedetail text-white'>
          <div className='container'>
            <div className='row'>
              <div className="col-md-3 p-4">
                <img src={game.image_url} className="img-thumbnail" alt={game.title} />
              </div>
            </div>
          </div>
        </div>
        <div className="container dark-grey-text mt-5">
          <div className="row wow fadeIn ">
            <div className ='col-md-8 col-sm-12 '>
              <p className="lead font-weight-bold"><Icon name='content'/>Link</p>
              <List divided relaxed>
                {game.url.map((episode) => (
                  <List.Item key={episode}>
                    <List.Content>
                      <List.Header as='a' href={episode}>{game.title}</List.Header>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default withRouter(GameBoard)
