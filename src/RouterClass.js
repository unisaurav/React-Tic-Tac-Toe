import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from "./Game";
import App from "./App";
import Home from "./Home";




class RouterClass extends React.Component {
  render() {
    return (
      <Router>
          <Route path="/"  component={Home} />

        <Route path="/Home" exact component={Home} />

        <Route path="/mypage" exact component={Game} />
        <Route path="/app" exact component={App} />

      </Router>
    );
  }
}
export default RouterClass;
