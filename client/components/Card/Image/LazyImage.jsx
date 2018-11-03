import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Image, Visibility, Loader } from 'semantic-ui-react'

export default class LazyImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string
  }

  static defaultProps = {
    // size: 'medium'
  }

  state = { 
    show: false
  }

  showImg = () => {
    this.setState({
      show: true
    })
  }

  render() {
    const { size } = this.props
    if (!this.state.show) {
      return (
        <Visibility className="card-container__img" as="span" onOnScreen={this.showImg}>
            <Loader active inline="centered" size={size} />
        </Visibility>
      )
    }
    return <Image className="card-container__img" {...this.props} />
  }
}