import React from 'react'
import App, { Container } from 'next/app';
// import { Auth0 } from '../src/config/services/HocAuth0';
import auth0 from '../src/config/services/auth0';
// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/main.scss';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {

    let pageProps = {};
    const user = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    let isAuthenticated = user;
    return { pageProps, user, isAuthenticated }
  }
  render() {
    const { Component, pageProps, isAuthenticated } = this.props
    return (
      <Container>
        <Component {...pageProps} auth={!!isAuthenticated} isAuthenticated={isAuthenticated} />
      </Container>
    )
  }
}