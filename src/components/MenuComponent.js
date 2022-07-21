import React, { Component } from 'react';
import { Media,Card,CardBody,CardImg, CardTitle, CardText } from 'reactstrap';



class Menu extends Component {
  renderDish(dish){
    if(dish!=null){
      return (
        <Card>
          <CardImg src={dish.image} alt={dish.name} top />
          <CardBody>
            <CardTitle>{dish.name}
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }else {
      return <div></div>
    }
  }
  render() {
    const menu = this.props.dishes.map((item,index) => {
        return (
          <div key={index} className="col-12 mt-5">
              <Media left middle onClick={()=>this.props.onClick(item)}>
                  <Media object src={item.image} alt={item.name} />
              <Media body className="ml-5">
                <Media heading>{item.name}</Media>
                <Media>{item.description}</Media>
              </Media>
            </Media>
          </div>
        );
    })

    return (
      <div className="container">
        <div className="row">
          <Media list>
              {menu}
          </Media>
        </div>
        <div className='row'>
          {this.renderDish(this.props.selectedDish)}
        </div>
      </div>
    );
}
}

export default Menu;