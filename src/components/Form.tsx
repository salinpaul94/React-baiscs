import React, { Component } from 'react'

class Form extends Component<any, any> {

  constructor({props}: any) {
    super(props)
  
    this.state = {
       username: ''
    }
  }

  handleUserNameChange = (event: { target: { value: any } }) => {
    this.setState({
      username: event.target.value
    })
  }
  render() {
    return (
      <div>
        <label>Username </label>
        <input type="text" value={this.state.username} onChange={this.handleUserNameChange} />
      </div>
    )
  }
}

export default Form