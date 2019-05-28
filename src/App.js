import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.setState={userName:""}
  }

  changeField (e) {
    console.log(e);
  }

  render() {
    return (
    <>
     <input type="text" className="userName" name="userName" value={this.state.userName} onChange={e => this.changeField(e)}/>
    </>
    );
  }
}

export default App;
