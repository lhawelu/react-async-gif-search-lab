import React, { Component} from 'react'

class GifSearch extends Component {

  state = {
    value: ""
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={e => this.props.handleSubmit(e, this.state.value)}>
        <label>
          Enter a Search Term:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default GifSearch