import React from 'react'
import { Button, Grid, Image, Container, Modal } from 'semantic-ui-react'
import { randomSig } from '../Profile/Gallery/fetchImages'
// import ExploreCardModal from './ExploreCardModal'
import CardInModal from './CardInModal'

class Explore extends React.Component {

  state = {
    isOpen: false, 
    srcForModal: null
  }

  closeModal = () => this.setState({ isOpen: false})
  clickHandleModal = (e) => {
    let targetSrc = e.target.src
    this.setState({ isOpen: true, srcForModal: targetSrc})
  }

  render() {
    const images = randomSig(12)
    return (
      <Container className="explore-container">
        <Grid stackable celled centered relaxed columns={3}>
          {
            images.map(imgUrl => {
              return (
                <Grid.Column key={'id: ' + imgUrl.substr(-2)}>
                  <Image onClick={this.clickHandleModal} src={imgUrl}></Image>
                </Grid.Column>
              )
            })
          }
          <Modal className="myCardModal"
            open={this.state.isOpen}
            onClose={this.closeModal}
            content={
              <CardInModal 
                imgsrc={this.state.srcForModal} 
                author={''}

              />
            } 
          />

        </Grid>
      </Container>
    )
  }
}

export default Explore