import React from 'react'
import '../assets/scss/main.scss'
import Navbar from './Navbar'
import Header from './Header'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="body">
        <Header />
        {children}
      </div>
    )
  }
}

export default Template
