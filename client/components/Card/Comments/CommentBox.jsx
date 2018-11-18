import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import { generateCID } from './generate_cid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class CommentBox extends Component {
  constructor(props){ 
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let newval = e.target.value
    this.setState({inputValue: newval})
  }

  handleSubmit(e){ 
    if (e.key === 'Enter') {
      let comID = generateCID(99)
      let postID = this.props.postID
      let comment = String(this.state.inputValue)
      let currentUsername = this.props.user || 'Johnsta'
      this.props.addComment(currentUsername, postID, comment, comID)
      e.preventDefault()
      this.setState({inputValue: ''}
      )
    }
  }

  render() {
    return (
      <Input onKeyUp={(e) => this.handleSubmit(e)} onChange={(e) => this.handleChange(e)} value={this.state.inputValue} className="comment-box" placeholder="Add a comment ...">
      </Input>
    )
  }
}

CommentBox.propTypes = {
  user: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    user: state.auth.user.name
  }
}

export default connect(mapStateToProps)(CommentBox)
