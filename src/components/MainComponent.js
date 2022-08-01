import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponents";
import Footer from "./FooterComponents";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Dishdetails from "./DishdetailComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leader: LEADERS,
      selectedDish: null,
    };
  }
  // onSelectDish(dishId) {
  //   this.setState({
  //     selectedDish: dishId,
  //   });
  // }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leader.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <Dishdetails
          dish={
            this.state.dishes.filter(
              (dish, index) => dish.id === parseInt(match.params.id, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment, index) => comment.dishId === parseInt(match.params.id, 10)
          )}
          // leader={this.state.leader.filter((leader) => leader.featured)[0]}
        />
      );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leader} />}
          />

          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route exact path="/menu/:id" component={DishWithId} />
          <Route exact path="/contact" component={Contact} />

          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default Main;
