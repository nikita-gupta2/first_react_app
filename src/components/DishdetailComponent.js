import React, { Component, useState } from "react";
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
  Button,
  NavItem,
} from "reactstrap";
import { baseUrl } from '../shared/baseUrl';
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import { Loading } from "./LoadingComponent";

const Dishdetails = (props) => {
  const renderDish = (dish) => {
    return (
      <Col>
        <Card>
        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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
        {comments.map((item, index) => {
          return (
            <div key={index}>
              <p>
                {item.comment} <br />
                <small>
                  --{item.author},{item.date}
                </small>
              </p>
            </div>
          );
        })}
        <CommentForm dishId={props.dish.id} addComment={props.addComment} />
      </div>
    );
  };
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
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
            <BreadcrumbItem activeu>{props.dish.name}</BreadcrumbItem>
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
