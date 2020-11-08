import React from 'react'
import Header from '../shared/Headers';
import Head from "next/head";

const BaseLayout = (props) => {
  const { children, className, auth } = props;
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
      <div className="layout-container">
        <Header auth={auth} />
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}
export default BaseLayout;