import React, { Component } from 'react'
import MainContainer from './MainContainer'
import Main from './Main'

export class App extends Component {

  render() {
    const isLogged = this.props.isLogged
    const showContent = isLogged ?
     (<MainContainer>
        <Main />
      </MainContainer> ) : null
    return showContent
  }
}

export default App
