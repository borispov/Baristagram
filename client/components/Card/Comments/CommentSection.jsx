import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import logo from '../../../assets/images/ma.png'
import PropTypes from 'prop-types'

class CommentSection extends Component {

  static propTypes = {
    classes: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
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
              <Comment.Text>{com.comment}</Comment.Text>
            </Comment>
          })
        }
      </Comment.Group>
    )
  }
}

export default CommentSection