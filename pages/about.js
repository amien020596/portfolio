import React, { Component } from 'react';
import BaseLayout from '../src/components/layouts/BaseLayout';
import BasePage from '../src/components/layouts/BasePage';
class About extends Component {
  render() {
    return (
      <BaseLayout>
        <BasePage className="about-page">
          <h1>i am about page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}
export default About;