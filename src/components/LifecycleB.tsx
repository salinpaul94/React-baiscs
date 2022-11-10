import React, { Component } from 'react'

class LifecycleB extends Component {

  constructor({ props }: any) {
    super(props)

    this.state = {
      name: 'Salinpaul'
    }
    console.log("LifecycleB Constructor")
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate')
  }
  render() {
    console.log('LifeCycleA render')
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB