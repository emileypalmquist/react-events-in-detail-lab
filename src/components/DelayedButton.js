import React, { Component } from 'react';

class DelayedButton extends Component {
  timeout = (e) => {
    e.persist()
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.timeout}>Delayed Button</button>
    )
  }
}

export default DelayedButton 
