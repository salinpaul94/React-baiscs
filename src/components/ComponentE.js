import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    static contextType = UserContext  // it only works with class component, and only one value can be consumed
  render() {
    return (
    //   <div><ComponentF/></div>
    <div>
        Component E context {this.context}
        <ComponentF/>
    </div>
    )
  }
}

// ComponentE.contextType = UserContext

export default ComponentE