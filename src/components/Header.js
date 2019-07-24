import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavItem,
  Collapse,
  NavbarToggler,
  Nav,
  Button

} from 'reactstrap';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  margin-right: 1em;
  text-transform: uppercase;
  color: #333;

  :hover {
    text-decoration: none;
  }
`

const renderLoginRegister = () => {
  return (
    <React.Fragment>
      <NavItem>
        <StyledLink to="/login">Login</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/registry">Registry</StyledLink>
      </NavItem>
    </React.Fragment>
  )
}

const renderProfile = (logout) => {
  return (
    <NavItem>
      <Button
        onClick={() => {
          localStorage.removeItem('token');
          logout();
        }}
        color="secondary"
        style={{ marginRight: "1em" }}
      >Logout</Button>
      <StyledLink to="/profile/edit">Profile</StyledLink>
    </NavItem>
  )
}

const Header = ({ isLogin, checkLoginCompleted, logout }) => {
  const [collapsed, toogeNavbar] = useState(true);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <StyledLink to="/" className="mr-auto">Weather Forecast</StyledLink>
        <NavbarToggler className="mr-2" onClick={() => toogeNavbar(!collapsed)} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            {isLogin && checkLoginCompleted ? (
              renderProfile(logout)
            )
              : renderLoginRegister()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;