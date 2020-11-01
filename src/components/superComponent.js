import React, { Component } from 'react'
class superComponent extends Component {
  constructor(props) {
    super(props)
    this.variabelSuper = "this is variable super";
  }

  callVariable() {
    return this.variabelSuper;
  }
}
export default superComponent;