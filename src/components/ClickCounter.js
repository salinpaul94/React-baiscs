import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {

  render() {
    const {name, count, incrementCount} = this.props
    return (
        <button onClick={incrementCount}>{name} Clicked {count} times</button>
    )
  }
}

export default UpdatedComponent(ClickCounter)