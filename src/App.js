import React, { Component } from 'react'
import { spring, Motion, StaggeredMotion, presets } from 'react-motion'
import logo from './logo.svg'
import './App.css'

class App extends Component {
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
    const dim = toggle ? 30 : 200
    const startO = 0
    const startY = 80
    const endO = toggle ? 0 : 1
    const items = [1, 2, 3, 4, 5, 6, 7, 8]
    const defaultStyles = items.map( () => { return {o: startO, y: startY} })
    const springParams = {stiffness: 220, damping: 24}
    return (
      <div>
        <Motion onRest={ () => this.handleClick } defaultStyle={ {o: 0} } style={ {o: spring(endO, {stiffness: 100, damping: 30, precision: 0.001})} }>
          {style =>
            <div style={ {margin: 30, height: 200, width: 200, background: 'steelblue', display: 'flex', alignItems: 'center', justifyContent: 'center'} }>
              <p>{style.o}</p>
            </div>
          }
        </Motion>
        <div style={ {height: 200, width: 500, background: '#333'} }>
          <Motion onRest={ () => this.handleClick } defaultStyle={ {x: 0} } style={ {x: spring(x)} }>
            {style =>
              <div style={ {height: 200, width: 200, background: 'red', transform: `translateX(${style.x}px)`} }></div>
            }
          </Motion>
        </div>
        <button onClick={ this.handleClick }>
          Toggle
        </button>
        <div style={ {height: 200, width: 500, background: '#333'} }>
          <Motion defaultStyle={ {x: 0} } style={ {x: spring(x, {damping: 13, stiffness: 200})} }>
            {style =>
              <div style={ {height: 200, width: 200, background: 'red', transform: `translateX(${style.x}px)`} }></div>
            }
          </Motion>
        </div>
        <button onClick={ this.handleClick }>
          Toggle
        </button>
        <div style={ {height: 400, width: 400, background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center'} }>
          <Motion defaultStyle={ {h: 30, w: 30} } style={ {h: spring(dim, {damping: 13, stiffness: 180}), w: spring(dim, {damping: 13, stiffness: 180})} }>
            {style =>
              <div style={ {height: style.h, width: style.w, background: 'red'} }></div>
            }
          </Motion>
        </div>
        <button onClick={ this.handleClick }>
          Toggle
        </button>
        <div style={ {height: 200, width: 400, background: '#333', display: 'flex'} }>
          <Motion defaultStyle={ {x: 0} } style={ {x: spring(x)} }>
            {style =>
              <div style={ {height: 200, width: 200, transform: `translateX(${style.x}px)`, background: 'red'} }></div>
            }
          </Motion>
          <Motion>
            {style =>
              <div style={ {width: 200, height: 200, background: 'white'} }></div>
            }
          </Motion>
        </div>
        <button onClick={ this.handleClick }>
          Toggle
        </button>
        <StaggeredMotion
          defaultStyles={ defaultStyles }
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
            ? {o: spring(1), x: spring(0)}
            : {o: spring(prevInterpolatedStyles[i - 1].o), x: spring(prevInterpolatedStyles[i - 1].x)}
          })}
        >
          {interpolatingStyles =>
            <div>
              {interpolatingStyles.map((style, i) => {
                <div key={ items[i] } style={ {opacity: style.o, margin: 10, transform: `translateX(${style.x}px)`, height: 100, width: 100, background: 'green'} }></div>
              })}
            </div>
          }
        </StaggeredMotion>
      </div>
    );
  }
}

export default App;
