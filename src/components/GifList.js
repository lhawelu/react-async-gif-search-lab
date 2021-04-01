import React, { Component } from 'react'

class GifList extends Component {

  render() {

    return (
      <div>
        <ul>
          {this.props.images.map((image, index) =>{
            return (
              <li key={index}>
              <img alt={image.title} src={image.images.original.url}/>
            </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default GifList