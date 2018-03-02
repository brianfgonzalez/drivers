import React from 'react'
import ReactDOM from 'react-dom'

class ModelDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {models: [], isLoading: true}
  }
  componentWillMount() {
    fetch('http://127.0.0.1:3000/api/models')
    	.then(res => res.json())
    	.then((json) => {
          this.setState({models: json.model, isLoading: false})
        })
      .catch((e) => console.log(e))
  }
  handleOnChange = (event) => {
    //console.log(event.target.value)
    this.setState({selectedModel: event.target.value})
    //console.log('handleOnChange triggered')
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    } else {
      return(
        <div>
          <select onChange={this.handleOnChange} id="model-dropdown">
            {this.state.models.map(
                model => <option key={model} value={model}>{model}</option>
              )}
          </select>
        </div>
      )
    }
  }
}

module.exports = ModelDropDown
