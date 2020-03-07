import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="elegant-color" dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBNavbarNav className="black-text" center>
        <MDBNavItem active>
              <MDBNavLink to="#!">Главная Событейная</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">История наших проишествий</MDBNavLink>
            </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;