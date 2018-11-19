import React from 'react'
import { Card, Image, Header, Modal } from 'semantic-ui-react'
import Avatar from '../Avatar/avatar'
// import CommentBox from '../Card/Comments/CommentBox'
import CommentBoxContainer from '../Card/Comments/CommentBoxContainer'
import CommentSection from '../Card/Comments/CommentSection'
import CardIcons from '../Card/CardIcons'
import Author from '../Card/Author'

const CardInModal = (props) => {

    return (
      <Modal.Content image>
      <Image wrapped size='medium' src={props.imgsrc} />
      <Modal.Description>
        <div className="explore-card__heading">
          <Image 
            className="explore-card__avatar" 
            size="mini"
            src={props.avatar || "https://react.semantic-ui.com/images/avatar/large/rachel.png" }
            rounded circular
            />
          <h3 className="explore-card__header">{props.author || 'JohnstaGigs'}</h3>
        </div>
        <p className="explore-card__description">{props.caption || 'Picture taken from the web, semantic-ui-react, without Filters! lol.' }</p>
        <CommentSection comments={props.posts} postid={props.postid} classes="explore-card__comments" />
        <CardIcons classes="explore-card__icons" />
        <CommentBoxContainer postID={props.postid} />
      </Modal.Description>
    </Modal.Content>
  )
}

export default CardInModal
