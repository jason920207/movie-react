import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const MovieList = ({ movie }) => (
  <section className='featured-posts'>
    <div className="row d-flex align-items-stretch p-2">
      <div className="image col-lg-4">
        <Link to={'/movies/' + movie._id} ><img src={movie.imageUrl} className="img-thumbnail" alt="..." /></Link>
      </div>
      <div className="text col-lg-8">
        <div className="text-inner d-flex align-items-center">
          <div className="content">
            <header className="post-header">
              <Link to={'/movies/' + movie._id} ><h2 className="h4">{movie.title}</h2></Link>
            </header>
            <p>Publish Date: <Moment format="YYYY-MM-DD">{movie.publishDate}</Moment></p>
            <footer className="post-footer d-flex align-items-center">
              <div className="date"><i className="icon-clock">
                <Moment format="YYYY-MM-DD">{movie.updatedAt}</Moment>
              </i></div>
              <div className="comments"><i className="icon-comment"></i>12</div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default MovieList
