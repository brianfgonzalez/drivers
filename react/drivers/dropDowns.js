// import {mongoose} from '../db/mongoose'
// import {Driver} from '../models/driver.js'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

// const {ObjectID} = require('mongoDB')
// const {Todo} = require('./../server/models/todo')
// const {User} = require('./../server/models/user')

$(() => {
  $("#alertButton").on("click", () => {
    alert("This is an alert!")
  })
})

let dropDown = (props) => {
  let colorStyle = {
    width: 100,
    height: 20,
    backgroundColor: props.color
  }
  return <div style={colorStyle}/>
}

module.exports = dropDown
