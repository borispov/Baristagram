import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'


export class CommentBox extends Component {

  state = {
    textValue: ''
  }

  onTextChange = (e) => {
    e.preventDefault()
    const textValue = e.target.value
    return this.setState({
      textValue
    })
  }

  render() {
    return (
      <Input onChange={this.onTextChange} className="comment-box" placeholder="Add a comment ..." focus="false">
      </Input>
    )
  }
}

export default CommentBox
