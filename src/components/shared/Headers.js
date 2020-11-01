

// class Header extends Component {
//   render() {

//     return (
//       <React.Fragment>
//         <br />
//         <Link href="/"><a>Home</a></Link>
//         <Link href="/portfolios"><a>Portfolio</a></Link>
//         <Link href="/cv"><a>CV</a></Link>
//         <Link href="/blogs"><a>Blog</a></Link>
//         <Link href="/about"><a>About</a></Link>
//         <style jsx>
//           {`
//           a{
//             font-size:20px;
//           }        
//         `}
//         </style>
//       </React.Fragment>
//     )
//   }
// }


import React, { useState, Component } from 'react';
import Link from 'next/link';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
export const BsNavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}><a className="nav-link">{title}</a></Link>
  )
}
const Header = (props) => {
  const [isOpen, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" >reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <BsNavLink route="/" title="Home" />
            </NavItem>
            <NavItem>
              <BsNavLink route="/portfolios" title="Portfolio" />
            </NavItem>
            <NavItem>
              <BsNavLink route="/cv" title="Cv" />
            </NavItem>
            <NavItem>
              <BsNavLink route="/blogs" title="Blog" />
            </NavItem>
            <NavItem>
              <BsNavLink route="/about" title="About" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;