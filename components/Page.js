import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import Nav from "./Nav";

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <Nav/>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
