import React, { Component } from 'react';
import { Media,Card,CardBody,CardImg, CardTitle, CardText, CardGroup,CardImgOverlay, Row, Col, NavItem } from 'reactstrap';

class Dishdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish:null,
}

}
  renderDish(dish){
    if(dish!=null){
    return (
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
        );
  }
  else {
    return <div></div>
  }
}
renderComments(Comments){
<h4 className='d-flex p-2'>Comments</h4>

}

render() {
    return(
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <div className='m-1'>
            {this.renderDish(this.props.selectedDish)}

              </div>
            </div>
            <div className='col-sm'>
              <div className='m-1'>
            

              </div>
            </div>
          </div>
          </div>

            )
    }     
  }


export default Dishdetails;