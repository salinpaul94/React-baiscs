import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()     // new approach
      this.cbRef = null                     // old method
      this.setCbRef = (element) => {
        this.cbRef = element
      }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }

        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </>
    )
  }
}

export default RefsDemo