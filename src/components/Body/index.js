// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class Body extends Component {
  render() {
    return (
      <div className="body">
        <ConfigurationContext.Consumer>
          {value => {
            const {showContent, showLeftNavbar, showRightNavbar} = value

            return (
              <>
                {showLeftNavbar && (
                  <div className="left">
                    <h1>Left Navbar Menu</h1>
                    <ul>
                      <li>item1</li>
                      <li>item2</li>
                      <li>item3</li>
                      <li>item4</li>
                    </ul>
                  </div>
                )}
                {showContent ? (
                  <div className="content">
                    <h1>Content</h1>
                    <p>
                      lorem ipsum dolor sit ammet,consector adiplusing elit
                      lorem ipsum dolor sit ammet,consector adiplusing elit
                      lorem ipsum dolor sit ammet,consector adiplusing elit
                      lorem ipsum dolor sit ammet,consector adiplusing elit
                      lorem ipsum dolor sit ammet,consector adiplusing elit
                    </p>
                  </div>
                ) : null}
                {showRightNavbar && (
                  <div className="left2">
                    <h1>Right Navbar Menu</h1>
                    <div className="right1">
                      <p>Ad 1</p>
                    </div>
                    <div className="right1">
                      <p>Ad 2</p>
                    </div>
                  </div>
                )}
              </>
            )
          }}
        </ConfigurationContext.Consumer>
      </div>
    )
  }
}
export default Body
