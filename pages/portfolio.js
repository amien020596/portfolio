import React, { Component } from 'react'
import BaseLayout from '../src/components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends Component {
  static async getInitialProps({ query }) {
    let data = {}
    console.log("query", query)
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
          <h1>i am Portfolio page</h1>
          <h2>{data.title}</h2>
        </BaseLayout>
      </div>
    )
  }
}
export default withRouter(Portfolio);