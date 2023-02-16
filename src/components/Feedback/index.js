// Write your React code here.

import {Component} from 'react'

import Emoji from '../Emoji'

import './index.css'

class Feedback extends Component {
  state = {condition: true}

  subbu = () => {
    this.setState({condition: false})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {condition} = this.state

    let authButton

    if (condition === true) {
      authButton = (
        <div>
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-container">
            {emojis.map(eachEmoji => (
              <Emoji each={eachEmoji} key={eachEmoji.id} subbu={this.subbu} />
            ))}
          </ul>
        </div>
      )
    } else {
      authButton = (
        <div>
          <img src={loveEmojiUrl} alt="love emoji" className="love" />
          <h1 className="thankyou">Thank You</h1>
          <p className="para">
            We will use your feedback to improve customer support performance.
          </p>
        </div>
      )
    }

    return (
      <div className="main-container">
        <div className="card-container">{authButton}</div>
      </div>
    )
  }
}

export default Feedback
