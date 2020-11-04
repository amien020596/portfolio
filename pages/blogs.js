import React, { Component } from 'react'
import BaseLayout from '../src/components/layouts/BaseLayout';
import BasePage from '../src/components/layouts/BasePage';

class Blogs extends Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>i am blogs pages</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}
export default Blogs;