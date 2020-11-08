import React, { useState, useEffect, Component } from 'react';
import Link from 'next/link';
import moment from 'moment'
import _ from 'lodash';
import auth0 from '../../config/services/auth0';
import Cookies from 'js-cookie';
// import { useAuth0 } from "@auth0/auth0-react";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export const BsNavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}><a className="nav-link port-navbar-link">{title}</a></Link>
  )
}

export const Login = () => {

  return (
    <span className="nav-link port-navbar-link clickable">Login</span>
  )
}

export const Logout = () => {

  return (<span className="nav-link port-navbar-link clickable">Logout</span>)
}

const Header = (props) => {

  const [isOpen, setCollapsed] = useState(false);
  const toggleNavbar = () => setCollapsed(!isOpen);

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
            <NavItem className="port-navbar-item">
              <Login />
            </NavItem>
            <NavItem className="port-navbar-item">
              <Logout />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;