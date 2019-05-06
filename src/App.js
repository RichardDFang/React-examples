import React, { Component } from 'react';
import AntdButton from './antd/button';
import './App.css';
import "antd/dist/antd.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AntdButton></AntdButton>
      </div>
    );
  }
}

export default App;
