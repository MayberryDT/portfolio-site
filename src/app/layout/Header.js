import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar is-dark" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/" activeClassName="is-active">
            <span>mayberry.xyz</span>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/blog" activeClassName="is-active">
              Blog
            </NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" >
                Projects (Soon to come)
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Overview
                </a>
                <a className="navbar-item">
                  This Site
                </a>
                <a className="navbar-item" >
                  ESL Activities List
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://medium.com/@mayberrydt">
              <span className="icon">
                <i className="fab fa-lg fa-medium"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://github.com/mayberrydt">
              <span className="icon">
                <i className="fab fa-lg fa-github"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://twitter.com/mayberrydt">
              <span className="icon has-text-info" style={{ color: '#0084FF' }}>
                <i className="fab fa-lg fa-twitter"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://www.linkedin.com/in/mayberrydt/">
              <span className="icon" style={{ color: '#0077B5' }}>
                <i className="fab fa-lg fa-linkedin"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header