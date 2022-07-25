import React, { Component } from 'react';
import { Media,Card,CardBody,CardImg, CardTitle, CardText, CardGroup,CardImgOverlay, Row, Col, NavItem } from 'reactstrap';


const Dishdetails=(props)=>{
const  renderDish=(dish)=>{
    if(dish!=null){
      return (
          <Col>
            <Card>
              <CardImg src={dish.image} alt={dish.name} top />
              <CardBody>
                <CardTitle><h5 className='d-flex p-2'>{dish.name}</h5></CardTitle>
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

const  renderComments=(dish)=>{
  if (dish != null) {
    return (
      <div>
        <h4 className='d-flex p-2'>Comments</h4>
          {dish.comments.map((item,index)=>{
            return( <div>
              <p className='d-flex p-2'>{item.comment}</p>
              <p className='d-flex p-2'>--{item.author}, {item.date}</p>
            </div>                 
         )
         })
     }  
</div>
)}
  else {
    return <div></div>
  }
}



return(
      <div className='container'>
        <Row>
          <Col md="5" sm="12" xs='12'>
            <div className='m-1'>
              {renderDish(props.selectedDish)}
            </div>
          </Col>
          <Col md="5" sm="12" xs='12'>
              <div className='m-1'>
                {renderComments(props.selectedDish)}
               </div>
          </Col>
        </Row>
      </div>
      )
}

export default Dishdetails;