import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Button from '@hig/button';
import Tabs, { Tab } from "@hig/tabs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            HIG Testing App
          </p>
          <Button title="Hello, world!" />
          </header>
          <body>
            <Tabs>
              <Tab key="details" label="Details">Details content</Tab>
              <Tab key="activities" label="Activities">Activities content</Tab>
              <Tab key="inspector" label="Inspector">Inspector content</Tab>
            </Tabs>
          </body>
      </div>
    );
  }
}

export default App;
