import React, { Component } from 'react'

class Form extends Component<any, any> {

  constructor({ props }: any) {
    super(props)

    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }



  handleUserNameChange = (event: { target: { value: string } }) => {
    this.setState({
      username: event.target.value
    })
  }

  commentsHandleChange = (event: { target: { value: string } }) => {
    this.setState({
      comments: event.target.value
    })
  }

  handleTopicChange = (event: { target: { value: string } }) => {
    this.setState({
      topic: event.target.value
    })
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    if(this.state.username.length > 3){
      alert(`Hi ${this.state.username} your comment on ${this.state.topic} is ${this.state.comments}`)
    } else {
      alert('username should be greater than 3 string')
    }
    // alert(`Hi ${this.state.username} your comment on ${this.state.topic} is ${this.state.comments}`)
    e.preventDefault()
  }
  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username </label>
          <input type="text" value={username} onChange={this.handleUserNameChange} />
        </div>
        <br />
        <div>
          <label>Comments </label>
          <textarea value={comments} onChange={this.commentsHandleChange}></textarea>
        </div>
        <br />
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <br />
        <button>Submit</button>
      </form>
    )
  }
}
 
export default Form