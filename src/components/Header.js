import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { authenticate } from '../actions'

class Header extends Component {
  authButton = () => (
    <form className="form-inline"
      onSubmit={e => {
        e.preventDefault()
        this.props.authenticate(!this.props.authenticated)
      }}
    >
      <button
        className="btn btn-outline-success my-2 my-sm-0"
      >
        {this.props.authenticated
          ? 'Sign Out'
          : 'Sign In'
        }
      </button>
    </form>
  )

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resources" className="nav-link">Resources</NavLink>
            </li>
            <li className="nav-item">
              {this.authButton()}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({authenticated}) =>
  ({authenticated})

export default connect(mapStateToProps, {authenticate})(Header)
