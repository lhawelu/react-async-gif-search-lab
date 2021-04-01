import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    images: []
  }

  handleSubmit = (e, value) => {
    e.preventDefault()
    this.fetchData(value)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = (value = 'dolphins') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=L8ZcAXI80ep3VlD4UZRjHzPMiL41qQqh&rating=g`)
    .then(res => res.json())
    .then(giphy => this.setState({
      images: giphy.data.slice(0,3)}))
  }

  render() {
    return (
      <div>
        <GifList images={this.state.images}/>
        <GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default GifListContainer