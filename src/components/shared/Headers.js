import React, { Component } from 'react'
import Link from 'next/link';

class Header extends Component {
  render() {

    return (
      <React.Fragment>
        <br />
        <Link href="/"><a>Home</a></Link>
        <Link href="/portfolios"><a>Portfolio</a></Link>
        <Link href="/cv"><a>CV</a></Link>
        <Link href="/blogs"><a>Blog</a></Link>
        <Link href="/about"><a>About</a></Link>
        <style jsx>
          {`
          a{
            font-size:20px;
          }        
        `}
        </style>
      </React.Fragment>
    )
  }
}
export default Header;