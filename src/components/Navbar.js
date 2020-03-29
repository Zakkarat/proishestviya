import React, { useState } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavbarPage = () => {
  const [page, setPage] = useState(true)

  return (
      <MDBNavbar color="elegant-color" dark expand="md">
        <MDBNavbarNav className="black-text" center>
        <MDBNavItem active={page} onClick={() => setPage(true)}>
              <MDBNavLink to="/">Главная Событейная</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={!page} onClick={() => setPage(false)} >
              <MDBNavLink to="/history">История наших проишествий</MDBNavLink>
            </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    );
}

export default NavbarPage;