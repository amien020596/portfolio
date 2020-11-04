import React, { Component } from 'react'
import BaseLayout from '../src/components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';
import BasePage from '../src/components/layouts/BasePage';

class Portfolio extends Component {
  static async getInitialProps({ query }) {
    let data = {}
    try {
      const { id } = query
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      data = response.data;
    } catch (error) {
      console.error(error)
    }
    return { data }
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <BaseLayout>
          <BasePage>
            <h1>i am Portfolio page</h1>
            <h2>{data.title}</h2>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}
export default withRouter(Portfolio);