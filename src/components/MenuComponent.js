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
import { Loading } from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";

function Menu(props) {
  function RenderMenuItem({ dish }) {
    return (
      <Col sm={6}>
        <Card>
          <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </Col>
    );
  }

  const menu = props.dishes.dishes.map((item,index) => {
    return <RenderMenuItem key={index} dish={item}/>;
  });
    if (props.dishes.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (props.dishes.errMess) {
      return (
        < div className="container">
          <div className="row">
              <h4>{props.errMess}</h4>
            </div>
          </div>
      );
    } else {
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
  };

  


export default Menu;
