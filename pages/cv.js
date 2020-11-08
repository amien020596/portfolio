import React, { Component } from 'react'
import BaseLayout from '../src/components/layouts/BaseLayout';
import BasePage from '../src/components/layouts/BasePage';

class Cv extends Component {
  render() {
    return (
      <BaseLayout auth={this.props.auth}>
        <BasePage>
          <h1>i am cv page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}
export default Cv;