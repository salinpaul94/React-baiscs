import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {


        // method 4
    return (
        this.state.isLoggedIn && <div>Welcome Salinpaul</div>
    )
        // method 3
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Salinpaul</div> :
    //     <div>Welcome Guest</div>
    // )

        // method 2
    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Salinpaul</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return (
    //     <div>{message}</div>
    // )

        // method 1
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome Salinpaul
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>Welcome Guest</div>
    //     )
    // }
    
  }
}

export default UserGreeting