// import React, { Component } from 'react'

// export class EventBind extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             message: 'HELLO'
//         }

//         //   this.clickHandler = this.clickHandler.bind(this)
//     }

//     // clickHandler(){
//     //     if (this.state.message === 'HELLO'){
//     //         this.setState({
//     //             message: 'GoodBye !!'
//     //         })
//     //     } else {
//     //         this.setState({
//     //             message: 'HELLO'
//     //         })
//     //     }

//     //     console.log(this);
//     // }

//     clickHandler = () => {
//         if (this.state.message === 'HELLO') {
//             this.setState({
//                 message: 'GoodBye !!'
//             })
//         } else {
//             this.setState({
//                 message: 'HELLO'
//             })
//         }

//         console.log(this);
//     }
//     render() {
//         return (
//             <div>
//                 <div>{this.state.message}</div>
                    // binding in render
//                 {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                    // arrow function in render
//                 {/* <button onClick={() => this.clickHandler()}>Click</button> */}
//                 {/*binding in constructor */}
//                 {/* Arrow function as a class property */}
//                 <button onClick={this.clickHandler}>Click</button>
//             </div>
//         )
//     }
// }

// export default EventBind