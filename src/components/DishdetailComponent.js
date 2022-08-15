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
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  NavItem,
} from "reactstrap";

import { Link } from "react-router-dom";
const Dishdetails = (props) => {
  const renderDish = (dish) => {
    return (
      <Col>
        <Card>
          <CardImg src={dish.image} alt={dish.name} top />
          <CardBody>
            <CardTitle>
              <h5 className>{dish.name}</h5>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  };

  const renderComments = (comments) => {
    return (
      <div>
        <h4 className="d-flex p-2">Comments</h4>
        {comments.slice(0, 5).map((item, index) => {
          return (
            <div key={index}>
              <p>
                {item.comment} <br />{" "}
                <small>
                  --{item.author},{item.date}
                </small>
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  
  return (
    <div className="container">
      <Row>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>

        <Col md="5" sm="12" xs="12">
          <div className="m-1">{renderDish(props.dish)}</div>
        </Col>
        <Col md="5" sm="12" xs="12">
          <div className="m-1">{renderComments(props.comments)}</div>
        </Col>
      </Row>
    </div>
  );
};

export default Dishdetails;
