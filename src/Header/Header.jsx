import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {

  state = {
    name: 'Jonathan Ahrens'
  }

  handleHover() {
    const { name } = this.state
    this.setState({
      name: name === 'Jonathan Ahrens' ? 'Taka' : 'Jonathan Ahrens'
    })
  }

  render () {
    return (
      <header className="header">
        <h1
          className="header--title"
          onMouseEnter={() => this.handleHover()}
          onMouseLeave={() => this.handleHover()}
        >
          {this.state.name}
        </h1>
        <h3>Software Engineer</h3>
        <code>Brooklyn, NY</code>
      </header>
    )
  }
}

export default Header
