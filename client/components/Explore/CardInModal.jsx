import React from 'react'
import { Card, Image, Header, Modal } from 'semantic-ui-react'
import Avatar from '../Avatar/avatar'
// import CommentBox from '../Card/Comments/CommentBox'
import CommentBoxContainer from '../Card/Comments/CommentBoxContainer'
import CommentSection from '../Card/Comments/CommentSection'
import CardIcons from '../Card/CardIcons'
import Author from '../Card/Author'


class CardInModal extends React.Component {

  render() {
    console.log(this.props.posts)

    return (
      <Modal.Content image>
      <Image wrapped size='medium' src={this.props.imgsrc} />
      <Modal.Description>
        <div className="explore-card__heading">
          <Image 
            className="explore-card__avatar" 
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            rounded circular
            />
          <h3 className="explore-card__header">{this.props.author || 'JohnstaGigs'}</h3>
        </div>
        <p className="explore-card__description">Picture taken from the web, semantic-ui-react, without Filters! lol.</p>
        <CommentSection comments={this.props.posts} classes="explore-card__comments" />
        <CardIcons classes="explore-card__icons" />
        <CommentBoxContainer postID={'c_3'} />
      </Modal.Description>
    </Modal.Content>
  )
  }
}

export default CardInModal
