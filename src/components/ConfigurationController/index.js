// Write your code here
import {Component} from 'react'

import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onToggleShowContent1 = event => {
        onToggleShowContent(event.target.value)
      }

      const getContext = () => {
        onToggleShowLeftNavbar()
      }
      const getRight = () => {
        onToggleShowRightNavbar()
      }
      return (
        <>
          <div className="bg1">
            <h1 className="h11">Layout</h1>

            <input
              type="checkbox"
              id="one"
              checked={showContent}
              onChange={onToggleShowContent1}
            />

            <label htmlFor="one" className="h11">
              Content
            </label>
            <br />
            <br />
            <input
              type="checkbox"
              id="one1"
              onChange={getContext}
              checked={showLeftNavbar}
            />
            <label htmlFor="one1" className="h11">
              Left Navbar
            </label>
            <br />
            <br />
            <input
              type="checkbox"
              id="one2"
              onChange={getRight}
              checked={showRightNavbar}
            />
            <label htmlFor="one2" className="h11">
              Right Navbar
            </label>
            <br />
            <br />
          </div>
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
