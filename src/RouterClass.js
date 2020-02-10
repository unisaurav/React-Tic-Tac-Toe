import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from "./Game";
import App from "./App";
import Home from "./Home";
import Color from "./Color";





class RouterClass extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />

        <Route path="/color" exact component={Color} />

        <Route path="/Home" exact component={Home} />

        <Route path="/mypage" exact component={Game} />
        <Route path="/app" exact component={App} />

      </Router>
    );
  }
}
export default RouterClass;
