import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import moment from "moment-timezone";
import axios from "axios";

import Moment from "react-moment";
import "moment-timezone";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/date")
      .then(res => this.setState({ dates: res.data }));
  }

  render() {
    const dateToFormat = new Date("2018-03-15");

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.dates.map(date => (
          <p>{moment.tz(date, "America/New_York").format("DD/MM/YYYY h:mm")}</p>
        ))}

        <h1>
          <Moment fromNow ago>
            {dateToFormat}
          </Moment>
        </h1>
      </div>
    );
  }
}

export default App;
