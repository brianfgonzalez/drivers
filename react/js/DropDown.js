// import React from 'react'
// import ReactDOM from 'react-dom'
const React = require('./react-dom.development')
const ReactDOM = require('./react.development')

class DropDown extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <form>
        <h2>{props.name}</h2>
        <select id="model-dropdown">
          {this.props.items.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </form>
    )
  }
}

module.exports = DropDown
