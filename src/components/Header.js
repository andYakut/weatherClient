import React, { useState } from 'react';
import {
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,

} from 'reactstrap';

const Header = () => {
  const [collapsed, toogeNavbar] = useState(true);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">Weather Forecast</NavbarBrand>
        <NavbarToggler className="mr-2" onClick={() => toogeNavbar(!collapsed)} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/registry">Registry</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;