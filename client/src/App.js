import React from "react";
// import { Upload, Icon, message } from "antd";
import Email from "./Email";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{padding: 20}}>
        <Email />
      </div>
    );
  }
}

export default App;
