import React, { Component } from 'react';
import AntdTypography from './antd/typography';
import './App.css';
import "antd/dist/antd.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AntdTypography></AntdTypography>
      </div>
    );
  }
}

export default App;
