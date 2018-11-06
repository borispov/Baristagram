import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'
import { randomSig } from './fetchImages'


export const Gallery = (numOfImages) => {
  const images = randomSig()
  return (
    <Container>
      <Grid stackable celled centered relaxed columns={3}>
        {
          images.map(imgUrl => {
            console.log(imgUrl)
            return (
              <Grid.Column key={imgUrl.substr(-1)}>
                <Image src={imgUrl}></Image>
              </Grid.Column>    
            )
          })
        }
      </Grid>
    </Container>
  )
}

export default Gallery