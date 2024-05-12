// Write your code here

import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learing</p>
        <button type="button" onClick={this.onSubscribe} className="btn">
          {this.getButtonText()}
        </button>
      </div>
    )
  }
}

export default Welcome
