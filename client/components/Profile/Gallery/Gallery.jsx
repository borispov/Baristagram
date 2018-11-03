import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'

export const Gallery = () => {
  return (
    <Container>
      <Grid stackable celled centered relaxed columns={3}>
        <Grid.Column>
          <Image src="https://source.unsplash.com/random/450x450"></Image>
        </Grid.Column>

        <Grid.Column>
          <Image src="https://source.unsplash.com/random/450x450"></Image>
        </Grid.Column>
        
        <Grid.Column>
          <Image src="https://source.unsplash.com/random/450x450"></Image>
        </Grid.Column>
        <Grid.Column>
          <Image src="https://source.unsplash.com/random/450x450"></Image>
        </Grid.Column>

        <Grid.Column>
          <Image src="https://source.unsplash.com/random/450x450"></Image>
        </Grid.Column>
        
        <Grid.Column>
          <Image src="https://source.unsplash.com/random/450x450"></Image>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Gallery