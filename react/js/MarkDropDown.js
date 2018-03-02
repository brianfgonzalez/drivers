import React from 'react'
import ReactDOM from 'react-dom'

class MarkDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {marks: [], isLoading: true}
  }
  componentWillReceiveProps() {
    console.log(`Props Model: ${this.props.model}`)
    fetch(`http://127.0.0.1:3000/api/marks/${this.props.model}`)
    	.then(res => res.json())
    	.then((json) => {
          console.log(json)
          this.setState({marks: json.mark, isLoading: false})
        })
      .catch((e) => console.log(e))
  }
  handleOnChange = (event) => {
    console.log(event.target.value)
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    } else {
      return(
        <select onChange={this.handleOnChange} id="mark-dropdown">
          {this.state.marks.map(
              mark => <option key={mark} value={mark}>{mark}</option>
          )}
        </select>
      )
    }
  }
}

MarkDropDown.defaultProps = { model: '' }

module.exports = MarkDropDown
