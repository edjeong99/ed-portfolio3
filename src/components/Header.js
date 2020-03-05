import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar2.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong> Edward Jeong</strong>
            <br />
            <strong>Full Stack Developer</strong>
            <br />
            love to learn and build
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
