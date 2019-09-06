import React, { Component } from "react";
import Meta from "./Meta";
import Nav from "./Nav";
import '../styles/global.css'

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Nav/>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
