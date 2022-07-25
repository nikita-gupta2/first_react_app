import React, { Component } from 'react';
import { Media,Card,CardBody,CardImg, CardTitle, CardText, CardGroup,CardImgOverlay, Row, Col } from 'reactstrap';
import Dishdetails from './DishdetailComponent';

//   const renderDish=(dish)=>{
//   if(dish!=null){
//     return (
//       <Card>
//         <CardImg src={dish.image} alt={dish.name} top />
//         <CardBody>
//           <CardTitle>{dish.name}
//           </CardTitle>
//           <CardText>{dish.description}</CardText>
//         </CardBody>
//       </Card>
//     );
//   }else {
//     return <div></div>
//   }
// };

 const menu= (props)=> props.dishes.map((item,index) => {
  return (  

    <div key={index} className="flex-container">
      <Media left middle onClick={() => props.onClick(item)}>
              {/* <Media object src={item.image} alt={item.name} />
          <Media body className="ml-5">
            <Media heading>{item.name}</Media>
            <Media>{item.description}</Media>
          </Media> */}
          {/* <div className='flex container'> */}
          <Col sm="6">
          <Card style={{width: '18rem'}}>
        <CardImg alt={item.name} src={item .image}/>
        
        <CardImgOverlay>
      <CardTitle >
        <h5 className='d-flex p-2'>{item.name}</h5>
      </CardTitle>
      </CardImgOverlay>
        </Card>
        </Col>
        </Media>
        {/* </div> */}
          </div>

        )
    });
    function Menu (props){return (
      <div className="container">
        <div className="row">
          <Row xs>
          {menu(props)}
          </Row>
        </div>
        <div className='row'>
        <Dishdetails selectedDish={props.selectedDish}/>
        </div>
        </div>
    );
}
      
export default Menu;