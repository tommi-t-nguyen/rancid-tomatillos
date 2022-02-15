import React, { Component } from 'react'
import "./Nav.css"
class Nav extends Component {
  constructor() {
    super()
    this.listener = null;
    this.state = {
      status:"top"
    }
  }
  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 700) {
        if (this.state.status !== "bottom") {
          this.setState({ status: "bottom" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <div className="nav"
        style={{
         backgroundColor: this.state.status === "top" ? "" : "black"
         }}>
        <h3 className="nav-logo">Rotten Tomatillos</h3>
      </div>
    )
  }
}

export default Nav
