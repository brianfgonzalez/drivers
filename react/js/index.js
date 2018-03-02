// import React from 'react'
// import ReactDOM from 'react-dom'
//import $ from 'jquery'
// const React = require('./react-dom.development')
// const ReactDOM = require('./react.development')
const DropDown = require('./DropDown')
//import MarkDropDown from './MarkDropDown'

class DriverForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let modelItems = [
      'CF-G1',
      'CF-U1',
      'CF-31'
    ]
    let markItems = [
      'CF-G1Mk1',
      'CF-G1Mk2',
      'CF-G1Mk3',
      'CF-G1Mk4',
      'CF-G1Mk5'
    ]
    return(
      <div>
        <DropDown
          items={modelItems}
          name="Models"
        />
        <DropDown
          items={markItems}
          name="Marks"
        />
      </div>
    )
  }
}

ReactDOM.render(
  <DriverForm/>,
  document.getElementById('app')
)


/* <div>
  <ModelDropDown/>
  <MarkDropDown model={$("#model-dropdown").val()}/>
</div> */
