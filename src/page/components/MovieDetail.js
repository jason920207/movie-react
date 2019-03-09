import React, { Component } from 'react'
import Moment from 'react-moment'

class MovieDetail extends Component {
  render () {
    const { movie } = this.props
    return (
      <main>
        <div className='moviedetail text-white'>
          <div className='container'>
            <div className='row'>
              <div className="col-md-3 p-4">
                <img src={movie.imageUrl} className="img-thumbnail" alt={movie.title} />
              </div>
              <div className="col-md-9 p-4">
                <h1>{movie.title}(<Moment format="YYYY">{movie.updatedAt}</Moment>)</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container dark-grey-text mt-5">
          <div className="row wow fadeIn ">
            <div className ='col-md-8 col-sm-12 '>
              <p className="lead font-weight-bold">Description</p>
              <p>{ movie.description }</p>
              <div className ='row'>
                <div className="row d-flex justify-content-center wow fadeIn">
                  <div className="col-md-6">
                    <h4 className="my-4 h4">Additional information</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit
                      voluptates,
                      quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </main>
    )
  }
}

export default MovieDetail
