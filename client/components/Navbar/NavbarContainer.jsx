import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authentication'
import { withRouter } from 'react-router-dom'
import MenuBar from './MenuBar'

const mapStateToProps = (state) => ({auth: state.auth})

export default connect(mapStateToProps, { logoutUser })(withRouter(MenuBar))