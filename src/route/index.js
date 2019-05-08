import React, { Component } from "react";
import { View, Text } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import Home from "../screens/home";
import Detail from "../screens/detail";

export default class Route extends Component {
  render() {
    return (
      <Router>
        <Scene>
            {/* Home Component to show grid  */}
          <Scene title={"Images"} key="home" component={Home} />
          <Scene title={"Detail"} key="detail" component={Detail} />
        </Scene>
      </Router>
    );
  }
}
