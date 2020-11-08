import React, { useState, useEffect, Component } from 'react';
import Link from 'next/link';
import moment from 'moment'
import _ from 'lodash';
// import auth0 from '../../config/services/auth0';
import Cookies from 'js-cookie';
import { useAuth0 } from "@auth0/auth0-react";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export const BsNavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}><a className="nav-link port-navbar-link">{title}</a></Link>
  )
}

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);


  return (
    <span onClick={() => loginWithRedirect()} className="nav-link port-navbar-link clickable">Login</span>
  )
}

export const Logout = () => {
  const { logout } = useAuth0();
  return (<span onClick={() => logout({ returnTo: "http://localhost:3003" })} className="nav-link port-navbar-link clickable">Logout</span>)
}

const Header = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const [isOpen, setCollapsed] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const toggleNavbar = () => setCollapsed(!isOpen);

  let token = Cookies.get('access_token')

  console.log("get access token data")
  //   const getUserMetadata = async () => {

  //     try {
  //       let accessToken = await getAccessTokenSilently({
  //         audience: `https://dev-15p2r2aq.us.auth0.com/api/v2/`,
  //         scope: "read:current_user",
  //       });

  //       console.log("accesstoken", accessToken)

  //       const now = moment();
  //       let expires_at = moment(now).add(30, 'minutes').format('X')
  //       console.log("expires_at", expires_at)
  //       Cookies.set('access_token', accessToken);
  //       Cookies.set('expires_at', expires_at);

  //       setAccessToken(accessToken)
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };
  //   getUserMetadata();
  // }
  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand href="/" className="port-navbar-brand">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/portfolios" title="Portfolio" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/cv" title="Cv" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/blogs" title="Blog" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/about" title="About" />
            </NavItem>
            {!isAuthenticated && <NavItem className="port-navbar-item">
              <Login />
            </NavItem>}
            {isAuthenticated && <NavItem className="port-navbar-item">
              <Link href="#"><a className="nav-link port-navbar-link">{user ? user.name : ''}</a></Link>
            </NavItem>}
            {isAuthenticated && <NavItem className="port-navbar-item">
              <Logout />
            </NavItem>}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;