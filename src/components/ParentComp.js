import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Salinpaul'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Salinpaul'
            })
        }, 2000)
    }
  render() {
    console.log('*********************************** Parent Comp **********************************')
    return (
      <div>
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp