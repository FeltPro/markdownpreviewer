import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'

const MARKED = require("marked");

class App extends Component {

state ={
  markdown:""
}

updateMarkdown = function(markdown){
  this.setState({markdown});
}

  render() {
    let { markdown } = this.state;
    return (
      <div className="App container">
      <div>
        <FormGroup controlId="formControlsTextarea">
          <FormLabel>Markdown Input</FormLabel>
          <FormControl componentClass="textarea" placeholder="Enter Text" value={ markdown } onChange= {(event)=>this.updateMarkdown(event.target.value)}></FormControl>
        </FormGroup>
      </div>
      <div>
        <h1>Markdown Output</h1>
        <div dangerouslySetInnerHTML= {{__html: MARKED(markdown)}}></div>
      </div>
      </div>
    );
  }
}

export default App;
