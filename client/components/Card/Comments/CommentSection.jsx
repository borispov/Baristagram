import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import logo from '../../../assets/images/ma.png'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { removeComment, remComment } from '../../../actions/actionCreators';

class CommentSection extends Component {

  static propTypes = {
    classes: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  }

  onDelete = (e, i, comid) => {
    const { postid } = this.props
    this.props.remComment(postid, i, comid)
  }

  render() {
    return (
      <Comment.Group>
        {
          this.props.comments.map((com, i) => {
            const avaPath = com.author.replace(/ /g, '_')
            return <Comment key={`${com.id}_${i}`} className={this.props.classes && this.props.classes}>
              <Comment.Avatar src={`/files/${avaPath}.png` || logo} />
              <Comment.Author as='a'>{com.author || 'Johnsta Proshlow'}</Comment.Author>
              <Comment.Metadata>
                <div className="comment__time">{this.props.time || 'Today at 05:49PM'}</div>
              </Comment.Metadata>
              <Comment.Text onClick={(e) => this.onDelete(e, i, com._id)} >{com.comment}</Comment.Text>
            </Comment>
          })
        }
      </Comment.Group>
    )
  }
}

export default connect(null, { remComment })(CommentSection)