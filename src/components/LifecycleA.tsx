import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

  constructor({ props }: any) {
    super(props)

    this.state = {
      name: 'Salinpaul'
    }
    console.log("LifecycleA Constructor")
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'CodeEvolution'
    })
  }
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        LifecycleA
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA