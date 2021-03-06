import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      logo: logo
    }
  }
  
  newImg = (file) => {
    this.setState({logo: file});
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.logo} className="App-logo" alt="logo" />
          <form style={{marginTop: "100px"}}>
            <FileUpload onUpload={this.newImg} />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
