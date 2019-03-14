import React, { Component, Fragment } from 'react'
import { Form, Header } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'
import 'react-datepicker/dist/react-datepicker.css'
import { updateMovie, getMovie, deleteMovie } from '../../api'
import { withRouter } from 'react-router-dom'

class UpdateMovieForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: null,
      title: '',
      imdbRating: 0,
      publishDate: '',
      description: '',
      trailer: ''
    }
  }

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value })
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user, history } = this.props
    const { imageUrl } = this.state.movie
    const { title, imdbRating, publishDate, description, movie, trailer } = this.state
    const data = {
      title,
      imdbRating,
      publishDate,
      description,
      imageUrl,
      trailer
    }
    updateMovie(user, data, movie._id)
      .then(() => history.push('/dashboard/movies'))
  }

  deletemovie = () => {
    const { user, history } = this.props
    const { movie } = this.state
    deleteMovie(user, movie._id)
      .then(() => history.push('/dashboard/moives'))
  }

  componentDidMount () {
    getMovie(this.props.match.params.id)
      .then(res => this.setState({
        movie: res.data.movie,
        title: res.data.movie.title,
        imdbRating: res.data.movie.imdbRating,
        publishDate: res.data.movie.publishDate,
        description: res.data.movie.description
      }))
  }

  render () {
    const { movie } = this.state
    if (!movie) {
      return (
        <h1>Loading ...</h1>
      )
    }

    return (
      <Fragment>
        <Header as='h2' image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBATEw8VExQXFRUWFRUWFQ8PFRUSFRUXFhUVFxUYHyogGBslGxYVITEhJSstLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQcIAgQGBQP/xABKEAABAgUBBQUDBwkGBAcAAAABAAIDBBEhMWEFB0FRcQYSE7HxCIHwIiMyQnSRsxQlUlRikpOh0hYkgqLBwhUz0eEYNUNjcoOy/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AM3pXkh5KaD0QUngEJ4cVMWGfi6Y1KCk06oTRTGpTFzn4sEFrTKV4lTU+ialBQeJQH7lM9Ez080FBr0SteimeiaBBa8kJ4BTQeiYsEFJ4BCfvUx1TGpQUmnVK0ypi5z8WTU+iC14lAeJU1KZucIKCgNeimenmmenmgoNeiV5KZsE0HogpPAITwCmLBMdUFJ+9Wq441KoFM5QVVRVBxJ4BTFhn4uqTyypjqgY6pjUpjUpi5z8WQMXOfiyan0TU+ialA1KZ6JnomenmgZ6eaZ6JnomgQNAmg9E0HomLBAxYJjqmOqw3vT3smC98pIPBiirY0xZwYcFkLgXDi7hgXuAyN2l7Y7PkBWZmWtecQxWJEPRjbgamg1WNtpb/YIP93kHv/aixGwf8rQ7zWC5iO+I9z3vc9zjVznEuc4nJLjclfmgzIzf9M96p2fCI0iRAadaf6L7+xt/Ek9zRMysWBf6TC2YYNT9F33ArXxEG52w9uyk5D8WWmGRmfsm7Sb0e0/KYdCAV9HPTzWlux9rTErFbGl4zoUQYc00t+iRhwsKg1BWyW7DeTD2k3wYoEKba2rmizYrRl0OuKcW8OFRWgZAz080zYJmwTQeiBoPRMWCYsEx1QMdUxqUxqUxc5+LIGLnPxZUDiVNSqBxKCqqVVQcSadVMalUmimLnPxZAxc5+LJqfRNT6JqUAcymeiZ6LznbbtpKbOgh8dxLnV8OE2hiRCOQ4NHFxt76BB6PPTzQ36LWLtNvg2rMucIcUSkM1oyDTvU/ain5RPTu9F5F3aOfJqZ6ZJ5mPHJ+/vINyzyCaD0WqOwd5+15Ujuzjorf0I9ZgH3u+UPcQs57u950rtICEWiBNUPzRd3mvAy6G63etctyL5Aqg93iwTHVMdUxqUGOt9PbJ0hJiDBdSZmO80OFjDhCz3jkbho6k/VWsq9jvb2yZra826tWwneAzRsKrXU0L++7/EvHICIiAiIgLsSE7FgRYcaE8siMcHMcMhwwf+3FddEG3/YPtOzaMjBmGANcfkRWj6kZtO+331Dho4L0GLBa/wDs6bacybmZQn5MWH4jQcCJCNDQatcf3AtgMdUDHVMalMalMXOfiyBi5z8WCalNSmpQNSqL3Uzc4VF+nmg5VREQcTa6mp9FTzKmpQNSmeiZ6Jnp5oOht7a0OVlo8zFNIcJheebiMNGpNANStRO023o87NRZmO6r3mw+qxg+ixo4NA/1JuSs5e0XtQskJeA11PFjVd+0yE2tOnecw+4LXhAREQF+stMPhvZEY8sexwc1zSQWuBqCCMGq/JEG2e7LtcNoyDIzqeO0+HHaLfONAPeA4BwIPIVI4L1bjQEnPxZa9+zltIsn5mB9WLA7/wDjhPHd/lEethacSg0mnJgxIkR5y97nHq4k/wCq/Fd/b0mYM1MwaUMONEZ+68j/AEXQQEREBERAREQez3Oxi3bcgRxc9vudCeP9VtZjUrVzcjJmJtqVIFRDbFiO6CG5o/zOato8XOfiyBi5z8WTUpqU1KBqUzc4TNzhM9PNAz081a16KZ6eateSDkilFUHEjiVM9FSPuUz080DPTzTPRM9E0CDDftKShMvIRRhkWLDPKsRjXD8IrAi273idnPy/Z0xLNp4lA+ETQARWHvNFeFbtJ5OK1HiwnNc5r2lrmktc0gtIcDQtIOCDwQcEREBERBlD2epcu2rEfT5MOXiEnVzmNA/mfuWx+pWMdwvZYysi6ZitpEme65oOWwG18P8Ae7zndC1ZLdFb3mguAJr3WkgF1BU0HGgQa4b++zxgbR/KWt+bmh3tBFYA2IPeO67/ABFYyW4HbjsxD2lJxJd57p+lCfSpZFbXuu6XII4glanbb2RHlI8SBHYWRGGhHAjg5p4tIuCg6CIiAiIgIi9L2C7IxtpTTYLAWw20dGi0qIcOv3d83AHG/AGgZV9nXs8WQpiee3/mfMwefcYaxHDQu7o/+srMupXW2bIQpeDDhQ2hsOGwMY0cGtFB1PM8V2dSgalM3OEzc4TPTzQM9PNM9PNM9PNM2GEDNhhWvAKaD0V0CC0VUVQcSK9FM9FTfopoEDQJoPRNB6JiwQMWCxXvX3VicLpqTo2ap85DNGtj04gmzYnCpsbVplZUx1TGpQaVbS2dGgRHQo8J8J7cse0sPWhyNeK6q3T2nsqWjs7sxAhxm/oxGMiAdO8LLzj91+xCe8dnwweQdGa390Oog1ShQ3OcGtaXOJoAAXEk4AAysxbstz8R72TO0YfchCjmSzrPecjxm/Ubj5BueNOOZtjdm5KVvAlIME82Ma11NXZP3ruT87Cgw3RY0RsKG0VLnuDGjqT5IP3JAFTRrQK3oAAOJ5Ba0byN40WPtSFGlIhbDlHUlyMPdX5yIRxDvo04tA5ld/ervXM4HSsmXMljaJEILHxx+iBlsPQ3PGgqDilBtx2B7aQNqSwiMIZFaAI8GvymO05sN6O92QQnbrsPKbThBkUdyIwfNx2gd9h/R/abzafdQ3Wq+wdtTEnHZHl4phxG8RcFpy1ww5p5FbC9hd78nNtZCmS2UmLD5RpBeebHn6JP6LueSgw32u3bbSkHOL4JjQRWkaEHRGU5vAvDtztqV45bvg2FL145tzXxNqdkNmxzWNIQIjzlxhsDz1eAD/NBp2uTGFxAAJJNAACSScADiVtazddsRpr/AMPYTyL47h+6XUX3tldn5KV/5EpBhHnDhsY4+8CpQa9djN0E9Nlr5hplIGavHzzxyZCN215upzoVsJ2c2BLSMBsGXhCGwXPFznHLnO+s40z7hZd6amYcJjokWI2Gxoq5z3NY1o1cbBYc7f76mNDoOzvlvuDMuHyWcPmmH6R/aNtCgzRqUzc4Xl918Vz9kSL3vLnOhlznOJc5zi9xLnE3JXqM9PNAz081+Im4bojoQiM77WhzmBze+GEkBxbkNJBvosfb0d6EKQDpeXLYs2RcfSZBBwX83cme82pXwe4Gcix9sTcWLEc+I+ViOc9xq4kxoCDYPNhhNB6JoPRNAgaBUWtxUxYZVFuqDkiiqDieSmg9FSeAUxYIGLBMdUx1TGpQMalYr3/bQjy8tIxYMZ8KIJg0exzmGnhm1RkWxxWVMXOfiwWIfaQB/IpP7Qfwyg8bsTfhtOFQRmQpoD6zm+DE/eZRv+VffHtAnjssV4f3i34awiiDLe1t/M88UgSsGDq4vmHDp9EV6grHW3+0s7OODpqZfGIwCQGN/wDjDbRrfcF8lEBERAREQeh7Pdt9pSVBLzj2MH/pupFh05Bj6ge6hXutnb+p5o+elIEXVpiwTTW7h/JYkRBmv/xAPv8Amxtef5Q6n3eGvjbU357TiVEGFAgVFA4NdFe3UF57v3tWLUQfU272jnZx3emZqJGNagOce60/ssHyW+4L5aIg203Uiuxtn8vC/wB7l43ervabL+JKSLw6PdsSMKObBPFrODn8zhvXHhJ7edFh7JlNnynehubC7seN9F1ySYcPkKG7s8uZxwg5xIjnOLnOLnEkkkkkkmpJJyarKXs5f+aTH2N/40BYqWVfZyr/AMUmPsb/AMaAg2K0CYsMpiwymNSgY1KoFM5Uxc5VA4lBVVFUHEngFMdVSfvUxqUDGpTFzn4smLnPxZNSgan0WIfaRr+RSf2g/hlZe1KxD7SJ/uUn9od+GUGvyIiAiIgIiICIiAiIgIiICIiAiIgLKvs5H86TH2N/40BYqWVfZyP50mPsb/xoCDYrGpTFzn4smLnKalA1KoHEqan0VF7oLVVSqqDiTTqpi5z8WVNrqan0QNT6JqU1KZucIGbnCxD7SLv7lJ/aHfhuWXs9PNYh9pF39yk/tDvwyg1+REQEREBERAREQEREBERAREQdye2XHgsgviwy1kZniQnWLXsrQ0I4g5GRbmumtn+x3Z+Wnuz0jLzEIPaYVQcOY/vOo9jvquH87g1BIWDd4XYSZ2ZGo/5cBxPhRgKB3HuuH1X04ceCDySyr7OR/Okx9jf+NAWKllX2cj+dJj7G/wDGgINitSmp9E1PombnCBm5wqL9PNTPTzVrXp5oOSIiDieZU1KpHEqZucIGbnCZ6eaZ6eaZ6eaBnosQ+0if7lJ/aD+GVl7QLEXtI0/IpL7Qfwyg19REQEREBERAREQEREBERAREQbabqTTYuz+fhf73L0G1tmQJiDEgzENsWG8UcxwqDypyINwRcEVXn91Nti7PP/tf73L1epQavbzd20fZrzFh1iyjj8l+XQicMi0+4OwdDZfX9nI/nSY+xv8AxoC2GmZdkRj2RWNexzS1zHAOaWmxBBsarxXY7dtB2ftCYmoMU+FEhGG2A4VMPvPY8/LrcDuClRW9yaVIe5zc4TPTzTPTzTPTzQM9PNWvLCmbDCteAQcqIpRVBxIUz081SK9FM9PNAz080zYJmwTQeiBoPReF3xdk4u0JAMgDvRoUQRWsqB3x3S1zKmwNDUdKcV7rFgmOqDTV/ZufBIdIzIIyDAjgj3d1cf7Oz36lMfwY39K3NxqUxnKDTI9np79SmP4Mb+lD2env1KY/gxv6VubqV8rtJt+XkZd8zMv7rG2AF3PecMY36zj/ANSaAEoNQJzZUzCaDFl4sNpNA58OJDBOaAuGbFdNel7d9tJnacwYkU92G2ohQQSWw2n/APTjaruOgAA80gIsh7q92sTaL/Gjd6HJtN3D5LozhlkM8ubvcL4+ZvG7BxtmR+MSWeT4MamePhvpYPA++lRxADx670rsaaiND4crGiNNaOZCivaaWNwKLor2u7XeDH2ZGoaxJV7h4sKuDjxIdcPA4YcBQ8CA87/Z2e/Upj+BG/pT+zs9+pTH8CN/StwtlbTgzEGHGgRBFhxB3muGCONeIINiDcEUXbxqUGmX9nZ79RmP4Eb+ldrZ3Y7aUeK2FDkY9XGlXQokNo1c9wAaNStw8ZympQfJ7KbH/I5KVly7vGFDawuGC7LiByqSvq6n0TU+iZucIGbnCZ6eaZ6eaZ6eaBnp5pmwwmbDCaBA0CugU0CuLIKqoqg4kV6KZsFTyU0HogaD0TFgmLBMdUDHVMalMalMXOfiwQMXOfiyalNSvl9pNvy8jLvmZl/dY3AF3PefosY36zj/ANSaAEoHaTb8vIy75mZf3WNsBlz3n6LGN+s408yaAErVnt32zmdpzBixT3YbaiDBBq2Ew+bjQVdx0AADt52zmNpzJixT3YbaiDBBJbDYfNxtV3HQAAeaQFkPdVu2ibRiCPHBZJsdc3a6M4ZhsPLm73C+G6rdtE2jEEeMCyTY65u10ZwzDYeXN3uF8bLyksyGxkKEwMhsAa1rQGta0WDQAgSksyGxkKEwMhsAa1rQGta0WDQAuvtnZUCagRJeNDESE8Uc08ORB4OBuCMFd3QeiaBBqhvH7Bx9mR6GsSWeT4MamePhvph4HuIuOIHj1ultnZMCZgRJePDESG8Uc0/ycDkEG4IuCtXd4/YKPsyPQ1iSzyfBjUzx7j6YeB9+RxAD9d2m8CNsyNQ1iSrz87C4g48SHXDxyw4WPAjZ/ZO0oMxBhx4MQRYcQVa5vEcqZBBqCDcEGq0rXtd2m8CNsyPQ96JKvPzsKtwceJDrYPA9zgKHgQG1WpTU+i6uytpQZmDDmIMQRITx3mOGKajgQbEG4IIXazc4QM3OEz080z080z080DPTzTNhhM2GE0CBoE0CaBMWGfi6Biwz8XVFuqmNSqLdUFVUVQcSeAUxYKk8ApjqgY6pjUpjUpi5z8WQMXOfiyalNSmpQNStYt+W2o0ba0aC5x8OB3WQmXoO8xr3up+kSc8g0cFs7m5wsXb091jtoRfyuVeyHHLQ2I19Wsihoo13eAJa4NoLihAGKXDXFZD3Vbtom0YgjRgWSbHXN2ujOGYbDy5u9wvj7/ZPcZMujNdPRIbILTUshuL3xKfV71AGDmbnpkZ4lJZkNjIUJgZDYA1rWgNa1osGgIErLMhsZChMDIbAGta0BrWtFg0AL9dB6JoPRNAgaBMWGUxYZTGpQMaldLbOyYEzAiQJiGIkOIKOaf5Fp4EG4IuCu7i5ympQaobxuwUfZkehrEl3k+DGpnj4b6WDwPcRccQPHrdLbOyYE1AiQZiGHwnijmnhyIPBwNwRcLC87uCi+KfBn2CETbxGO8RreR7tnHW3uQfr7Nk7EJnoJJMJohxAODYhLmkjqAP3FnDPTzXmuwXYyX2bLmFCJe5xDosVwDXRHgUFvqtF6N4VOSSV6XPTzQM9PNM2GEzYYTQIGgTQJoExYZ+LoGLDPxdMalMalMdUDHVUDiVMXKoHEoKqiIOJP3qY1K5FQCl+KCYuc/Fk1KoHEoBxKCalM3OFaVylK9PNBM9PNM9PNU36IeSCZsMJoPRU8gmgQTQJiwyrjGUpTUoJjUpi5yqBS/FAOJQTUpqfRUDiUpXKCZucJnp5q0r080N+nmgmenmmbDCp5cEPIIJoE0CugTGEExYZ+LpjUq0pqUAp1QTHVMXKoHEoBxKCan0VF7lKVuUz0QWqqIgiKogiFVEAoiICgVRBAiqICiqIIiqIIUKqICIiAFAqiCIqiCIqiCKoiCFVEQRERB//2Q==' content='Update Movie' />
        <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <Form.Group widths='equal'>
            <Form.Input fluid label='Movie Title' placeholder='Movie Title' name='title' value={this.state.title} onChange={this.handleChange} required/>
            <Form.Input fluid label='IMDB Rate' placeholder='IMDB Rate' name='imdbRating' value={this.state.imdbRating} min="0" max='10' step="0.1" onChange={this.handleChange} required/>
          </Form.Group>
          <Form.Group widths='equal'>
            <DateInput
              dateFormat='YYYY-MM-DD'
              label='Date'
              name="date"
              placeholder="Date"
              value={this.state.publishDate}
              iconPosition="left"
              onChange={this.handleChange}
              required
            />
            <Form.Input label='Trailer Url' name='trailer' onChange={this.handleChange} required />
          </Form.Group>
          <Form.TextArea label='Description' placeholder='Tell us more about Movie...' value={this.state.description} name='description' onChange={this.handleChange} required/>
          <Form.Group>
            <Form.Button>Submit</Form.Button>
            <Form.Button onClick={this.deletemovie}>Delete</Form.Button>
          </Form.Group>
        </Form>
      </Fragment>
    )
  }
}

export default withRouter(UpdateMovieForm)
