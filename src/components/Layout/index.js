// Write your code here
import {Component} from 'react'
// import ConfigurationContext from '../../context/ConfigurationContext'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './index.css'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default Layout
