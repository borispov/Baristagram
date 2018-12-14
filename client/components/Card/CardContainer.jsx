import React from 'react'
import Avatar from '../Avatar/avatar'
import { Card, Image, Icon } from 'semantic-ui-react'
import LazyImage from './Image/LazyImage'
import Author from './Author'
import logo from '../../assets/images/ma.png'
import CardIcons from './CardIcons'
import CommentSection from './Comments/CommentSection'
import CommentBox from './Comments/CommentBox'
import CommentBoxContainer from './Comments/CommentBoxContainer'

const defaultRandom = 'https://source.unsplash.com/random/614x614'

const CardContainer = (props) => {
  return (
    <Card className="card-container">
      <Card.Content>
        <div className="card-container__heading">
          <Avatar className="card-container__avatar" floated="left" size="large" />
          {/* <Card.Header className="card-container__header" >{props.author || 'JonhstaGigs'}</Card.Header> */}
          <Author author={props.author} className="card-container__header"/>
        </div> 
      </Card.Content>
      <LazyImage className="card-container__img" src={props.source || defaultRandom} rounded/>
      <Card.Content>
        <CardIcons />
      </Card.Content>
      <CommentSection postid={props.id} comments={props.comments} className="card-container__comment" />
      <CommentBoxContainer postID={props.id} />
    </Card>
  )
}

export default CardContainer
