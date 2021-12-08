import React, {Component} from 'react';
import {  Link } from "react-router-dom";
import { imgs } from "../../assets";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

 class NavBarTop extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="white" light className="fixed-top bar-top" expand="xs">
        <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={imgs.logo} alt="" id="brand-img"/>
        </Link>
        {/* <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar> */}
          <Nav className="ml-auto" navbar>
            <NavItem className="d-none">
              <Link to="/holi" className="nav-link">
                Portafolio
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/murdaneta" target="_blank">
                <i className="fab fa-github fa-2x"/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/moises-urdaneta-4005/" target="_blank">
                <i class="fab fa-linkedin fa-2x"/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://gitlab.com/moises4005" target="_blank">
                <i class="fab fa-gitlab fa-2x"/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://wa.me/+56972475290" target="_blank">
                 <i class="fab fa-whatsapp fa-2x"/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="mailto:moiworkinggood@gmail.com?Subject=Desde%20Web%20" target="_blank">
                 <i class="fas fa-at fa-2x"/>
              </NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar className="d-none">
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        {/*</Collapse>*/}
        </div>
      </Navbar>
    );
  }
}
export default NavBarTop;