import Axios from 'axios';
import React, { Component } from 'react'
import BaseLayout from '../src/components/layouts/BaseLayout';
import axios from 'axios';
// import Link from 'next/link';
import { Link } from '../routes';
import BasePage from '../src/components/layouts/BasePage';

class Portfolios extends Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = response.data;
    } catch (error) {
      console.error(error)
    }
    return { posts: posts.splice(0, 10) }
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <li key={index}>
          <Link as={`/portfolio/${post.id}`} route={`/portfolio/${post.id}`}>
            <a style={{ 'fontSize': "20px" }}>{post.title}</a>
          </Link>
        </li>
      )
    })
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout auth={this.props.auth}>
        <BasePage>
          <h1>i am portfolio pages</h1>
          {this.renderPosts(posts)}
        </BasePage>
      </BaseLayout>
    )
  }
}
export default Portfolios;