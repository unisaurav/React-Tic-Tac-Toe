import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: "",
      player2: ""
    };
  }

  p1ontext = ev => {
    console.log(ev.target.value);
    this.setState({ player1: ev.target.value });
  };

  p2ontext = ev => {
    console.log(ev.target.value);
    this.setState({ player2: ev.target.value });
  };

  next = () => {
    var name = this.state.player1.toLowerCase();
    var name2 = this.state.player2.toLowerCase();

    if (name === "" || name2 === "") {
      alert("name to dal de gareeb");
      return;
    }

    if (name === "lavanya") {
      alert("I <3 you player 1, u shall win");
    }
    if (name2 === "lavanya") {
      alert("I <3 you player 2, u shall win ");
    }
    this.props.history.push("/color", {
      p1: this.state.player1,
      p2: this.state.player2
    });
  };

  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            class="form-control"
            placeholder="Player One"
            onChange={this.p1ontext}
          />
          <input
            type="text"
            class="form-control"
            placeholder="Player Two"
            style={{ marginTop: "5%" }}
            onChange={this.p2ontext}
          />
          <button
            type="button"
            class="btn btn-info"
            style={{ marginTop: "12%" }}
            onClick={this.next}
          >
            NEXT
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
