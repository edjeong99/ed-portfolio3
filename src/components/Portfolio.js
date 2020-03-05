import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

import pic2 from '../assets/images/image1.jpg'
import pic3 from '../assets/images/image2.jpg'
import pic4 from '../assets/images/image3.jpg'
import pic5 from '../assets/images/image1.jpg'
import pic6 from '../assets/images/image2.jpg'
import pic7 from '../assets/images/image3.jpg'

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 col-12-mobile">
            <article className="item">
              <a href="/#" className="image fit">
                <img src={pic2} alt="" />
              </a>
              <header>
                <h3>Ipsum Feugiat</h3>
              </header>
            </article>
            <article className="item">
              <a href="/#" className="image fit">
                <img src={pic3} alt="" />
              </a>
              <header>
                <h3>Rhoncus Semper</h3>
              </header>
            </article>
          </div>
          <div className="col-4 col-12-mobile">
            <article className="item">
              <a href="/#" className="image fit">
                <img src={pic4} alt="" />
              </a>
              <header>
                <h3>Magna Nullam</h3>
              </header>
            </article>
            <article className="item">
              <a href="/#" className="image fit">
                <img src={pic5} alt="" />
              </a>
              <header>
                <h3>Natoque Vitae</h3>
              </header>
            </article>
          </div>
          <div className="col-4 col-12-mobile">
            <article className="item">
              <a href="/#" className="image fit">
                <img src={pic6} alt="" />
              </a>
              <header>
                <h3>Dolor Penatibus</h3>
              </header>
            </article>
            <article className="item">
              <a href="/#" className="image fit">
                <img src={pic7} alt="" />
              </a>
              <header>
                <h3>Orci Convallis</h3>
              </header>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
