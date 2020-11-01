import React, { Component } from 'react'
import Header from '../shared/Headers';
import '../../styles/main.scss';
import Head from "next/head";
import Link from "next/link";

class BaseLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link
            rel="preload"
            href="../../../static/fonts/Montserrat-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="../../../static/fonts/Montserrat-Italic.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="../../../static/fonts/Montserrat-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="../../../static/fonts/Montserrat-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <Header />
        {this.props.children}
      </React.Fragment>
    )
  }
}
export default BaseLayout;