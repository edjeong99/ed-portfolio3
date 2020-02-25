import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            {/* <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li> */}
            <li>
              <a
                href="https://github.com/edjeong99"
                className="icon fa-github"
                target="_blank"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/edward-jeong-8a568ba/"
                className="icon fa-linkedin"
                target="_blank"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="mailto: edjeong99@gmail.com"
                className=" icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          {/* <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul> */}
        </div>
      </div>
    )
  }
}

export default Footer
