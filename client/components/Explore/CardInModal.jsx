import React from 'react'
import { Card, Image, Header, Modal } from 'semantic-ui-react'
import Avatar from '../Avatar/avatar'
import CommentBox from '../Card/Comments/CommentBox'
import CommentSection from '../Card/Comments/CommentSection'
import CardIcons from '../Card/CardIcons'
import Author from '../Card/Author'


const CardInModal = (props) => {
  console.log(props)
  return (
    <Modal.Content image>
      <Image wrapped size='medium' src={props.imgsrc} />
      <Modal.Description>
        <div className="explore-card__heading">
          <Image 
            className="explore-card__avatar" 
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            rounded circular
          />
          <h3 className="explore-card__header">{props.author || 'JohnstaGigs'}</h3>
        </div>
        <p className="explore-card__description">Picture taken from the web, semantic-ui-react, without Filters! lol.</p>
        <CommentSection classes="explore-card__comments" />
        <CardIcons classes="explore-card__icons" />
        <CommentBox />
      </Modal.Description>
    </Modal.Content>








    // <Card className="explore-card">

    //   <Card.Content className="explore-card__img">
    //     <Image src={props.imgsrc} className="explore-card__photo" ></Image>
    //   </Card.Content>

    //   <Card.Content className="explore-card__info">
    //     {/* <Image src={props.imgsrc} className="explore-card__photo" ></Image> */}
    //     <div className="explore-card__heading">
    //       <Avatar className="explore-card__avatar" flaoted="left" size="medium" />
    //       <Author className="explore-card__header" />
    //     </div>
    //     <p className="explore-card__description">this is very good picture</p>
    //     <CardIcons />
    //     <CommentSection className="card-container__comment" />
    //     <CommentBox />
    //   </Card.Content>
    // </Card>

  )
}

export default CardInModal
