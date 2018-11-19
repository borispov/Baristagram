import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import logo from '../../../assets/images/ma.png'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { removeComment } from '../../../actions/actionCreators';

class CommentSection extends Component {

  static propTypes = {
    classes: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  }

  onDelete = (e, i) => {
    console.log(this.prop)
    const { postid } = this.props
    console.log(i)
    this.props.removeComment(postid, i)
  }

  render() {
    return (
      <Comment.Group>
        {
          this.props.comments.map((com, i) => {
            return <Comment key={`${com.id}_${i}`} className={this.props.classes && this.props.classes}>
              <Comment.Avatar src={logo} />
              <Comment.Author as='a'>{com.author || 'Johnsta Proshlow'}</Comment.Author>
              <Comment.Metadata>
                <div className="comment__time">{this.props.time || 'Today at 05:49PM'}</div>
              </Comment.Metadata>
              <Comment.Text onClick={(e) => this.onDelete(e, i)} >{com.comment}</Comment.Text>
            </Comment>
          })
        }
      </Comment.Group>
    )
  }
}



export default connect(null, { removeComment })(CommentSection)