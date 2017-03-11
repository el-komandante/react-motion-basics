import React, { Component } from 'react'
import { spring, Motion } from 'react-motion'
export default class AnimationDemo extends Component {
  constructor() {
    super()
    this.state = {
      toggle: false
    }
  }
  handleClick = () => {
    const { toggle } = this.state
    this.setState({
      toggle: !toggle
    })
  }
  render() {
    const { toggle } = this.state
    const x = toggle ? 0 : 300
    <div>
      <div style={ {height: 200, width: 500, background: '#333'} }>
        <Motion defaultStyle={ defaultMotionStyle } style={ motionStyle }>
          {style =>
            <div style={ {height: 200, width: 200, background: 'red', transform: `translateX(${style.x}px)`} }></div>
          }
        </Motion>
      </div>
      <button onClick={ this.handleClick }>
        Toggle
      </button>
    </div>
  }
}
