import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

constructor(props) { 
  super(props)
  this.props = props
  console.log(props)

  this.state = {
    frases: [],
    textValue: ''
  }
}

clickMe() {
  const value = this.state.textValue
  let frases = this.state.frases
  console.log(frases)
  frases.push(value)
  this.setState({
    frases: frases,
    textValue: ''
  })
 }

handleChange(e) {
  const value = e.target.value
  //console.log(value)
  this.setState({
  textValue: value
  })
}

  render() {
    return (
      <div className="main-container">
      <input value={this.state.textValue} type="text" onChange={this.handleChange.bind(this)} /> 
      <button  onClick={this.clickMe.bind(this)}/>
      <div>{this.state.frases.map((num, i) => {
        return(<p key={i}>{num}</p> 
      )})}</div>
      </div>
    );
  } 
}
// <input value={this.state.textValue} estamos linkeando el value con el state
export default Todo;


