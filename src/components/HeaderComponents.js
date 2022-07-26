import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import { Media,Card,CardBody,CardImg, CardTitle, CardText, CardGroup,CardImgOverlay, Row, Col } from 'reactstrap';

class Header extends Component {
 render() {
 return(
 <React.Fragment>
 <Navbar dark>
 <div className="container">
 <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
 </div>
 </Navbar>
 <div>
 <div className="container"  >
 <div className="row row-header">
 <div className="col-12 col-sm-6">
    <Card className="my-2"
    color="white"
    outline
    style={{
      width: '100rem'
    }}>
    <CardImg alt="Ristorante con Fusion " src= "https://wallpaperaccess.com/full/271686.jpg"  style={{height:300}}/>
      <CardImgOverlay>
        <CardTitle style={{color:"black"}}>
          <h5 className='d-flex p-2'>  Ristorante con Fusion </h5>
          <p>We take inspiration from the World's best cuisines, and create a
            unique fusion experience. Our lipsmacking creations will tickle your culinary senses!
            </p>
        </CardTitle>
      </CardImgOverlay>
    </Card>
 
 </div>
 </div>
 </div>
 </div>
 </React.Fragment>
 );
 }
}
export default Header;