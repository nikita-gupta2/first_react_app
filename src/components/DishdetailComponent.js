import React, { Component } from 'react';
import { Media,Card,CardBody,CardImg, CardTitle, CardText, CardGroup,CardImgOverlay, Row, Col, NavItem } from 'reactstrap';

class Details extends Component {
  renderDish(dish){
    if(dish!=null){
    return (
      <Row>
        <Col sm="6">
      <Card>
        <CardImg src={dish.image} alt={dish.name} top />
          <CardBody>
            <CardTitle><h5 className='d-flex p-2'>{dish.name}</h5>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        </Col>
        </Row>
        );
  }
  else {
    return <div></div>
  }
}

render() {
    return (
      <div className="container"> 
        <div className='row'>
          {this.renderDish(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Details;