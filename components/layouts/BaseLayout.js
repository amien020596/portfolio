import React, { Component } from 'react'
import Header from '../shared/Headers';
import '../../style/main.scss';

class BaseLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
      </React.Fragment>
    )
  }
}
export default BaseLayout;