import React, { Component } from 'react'

class CoordinatesButton extends Component {
  coordinates = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <button onClick={this.coordinates}>Coordinates Button</button>
    )
  }
}

export default CoordinatesButton