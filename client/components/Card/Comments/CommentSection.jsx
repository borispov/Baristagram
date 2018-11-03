import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import logo from '../../../images/ma.png'

class CommentSection extends Component {
  render() {
    return (
      <Comment.Group>

        <Comment>
          <Comment.Avatar src={logo} />
          <Comment.Author as='a'>{this.props.user || 'Johnsta Proshlow'}</Comment.Author>
          <Comment.Metadata>
            <div className="comment__time">{this.props.time || 'Today at 05:49PM'}</div>
          </Comment.Metadata>
          <Comment.Text>What a fantastic view, great shot Johnsta Proshlow!</Comment.Text>
        </Comment>

        <Comment>
          <Comment.Avatar src={logo} />
          <Comment.Author as='a'>{this.props.user || 'Bohoe Menslo'}</Comment.Author>
          <Comment.Metadata>
            <div className="comment__time">{this.props.time || 'Yesterday at 15:49PM'}</div>
          </Comment.Metadata>
          <Comment.Text>Great Inspiration piece, marvelous!</Comment.Text>
        </Comment>

      </Comment.Group>
    )
  }
}

export default CommentSection