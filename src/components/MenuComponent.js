import React, { Component } from "react";
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
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Dishdetails from "./DishdetailComponent";
import { Link } from "react-router-dom";

function Menu(props) {
  function RenderMenuItem({ dish }) {
    return (
      <Col sm={6}>
        <Card>
          <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </Col>
    );
  }

  const menu = props.dishes.map((item, index) => {
    return <RenderMenuItem key={index} dish={item} />;
  });

  return (
    <div className="container ">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
}

export default Menu;
