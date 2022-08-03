import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";

import {
  Media,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardImgOverlay,
  Row,
  Col,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div>
          <Navbar dark expand="md">
            <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
                <img
                  src="assets/images/logo.png"
                  height="30"
                  width="41"
                  alt="Ristorante Con Fusion"
                />
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link"
                      to="/home"
                      onClick={this.toggleNav}
                    >
                      <span className="fa fa-home fa-lg"></span> Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link"
                      to="/aboutus"
                      onClick={this.toggleNav}
                    >
                      <span className="fa fa-info fa-lg"></span> About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link"
                      to="/menu"
                      onClick={this.toggleNav}
                    >
                      <span className="fa fa-list fa-lg"></span> Menu
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link"
                      to="/contact"
                      onClick={this.toggleNav}
                    >
                      <span className="fa fa-address-card fa-lg"></span> Contact
                      Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>

          <div className=" heading-div">
            <img
              className="backgroundimg"
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
              alt="Img"
            />
            <div className="heading">
              <h5 className=""> Ristorante con Fusion </h5>
              <p className="">
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
            {/* <Card className="my-2"
    color="white"
    outline
    style={{
      width: '100rem'
    }}
    >

    <CardImg alt="Ristorante con Fusion " src= "https://wallpaperaccess.com/full/271686.jpg"  style={{height:300}}/>
      <CardImgOverlay>
      
        <CardTitle style={{color:"black"}}>

          <h5 className='d-flex p-2'>  Ristorante con Fusion </h5>
          <p>We take inspiration from the World's best cuisines, and create a
            unique fusion experience. Our lipsmacking creations will tickle your culinary senses!
            </p>

        </CardTitle>
       
      </CardImgOverlay>
    </Card> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
