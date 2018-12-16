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
import { checkUserLikeList } from './Image/checkUserLikeList'

const defaultRandom = 'https://source.unsplash.com/random/614x614'

const CardContainer = (props) => {

  const { author, likeList} = props
  const isAlreadyLiked = checkUserLikeList(author, likeList)

  return (
    <Card className="card-container">
      <Card.Content>
        <div className="card-container__heading">
          <Avatar className="card-container__avatar" floated="left" size="large" />
          {/* <Card.Header className="card-container__header" >{props.author || 'JonhstaGigs'}</Card.Header> */}
          <Author author={props.author} className="card-container__header"/>
        </div> 
      </Card.Content>
      <LazyImage className="card-container__img" isLiked={isAlreadyLiked} likeList={props.likeList} src={props.source || defaultRandom} postID={props.id} user={props.author} rounded/>
      <Card.Content>
        <CardIcons likes={props.likes} isLiked={isAlreadyLiked} />
      </Card.Content>
      <CommentSection postid={props.id} comments={props.comments} className="card-container__comment" />
      <CommentBoxContainer postID={props.id} />
    </Card>
  )
}

export default CardContainer
