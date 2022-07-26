import React, { Component } from 'react';
import { Media,Card,CardBody,CardImg, CardTitle, CardText, CardGroup,CardImgOverlay, Row, Col } from 'reactstrap';
import Dishdetails from './DishdetailComponent';



 const menu= (props)=>{
  return(
  <Row>
  { 
  props.dishes.map((item,index) => {
  return (  
  <Col  key={index} onClick={() => props.onClick(item)}  md='5' sm="12" xs="12">
    <Card inverse>
      <CardImg alt={item.name} src={item .image} width="100%"/>
      <CardImgOverlay>
        <CardTitle style={{color:"black"}}>
          <h5  className='d-flex p-2'>  {item.name}</h5>
        </CardTitle>
      </CardImgOverlay>
    </Card>
  </Col>)
 }
 )
 }
 </Row>
 )}

function Menu (props){return (
<div className="container" my-5 >
  <div className="row">
    < Media list>{menu(props)}</Media>
  </div>
  <div className='row'>
    <Dishdetails selectedDish={props.selectedDish}/>
  </div>
</div>
);
}
      
export default Menu;