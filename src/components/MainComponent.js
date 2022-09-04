import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponents";
import Footer from "./FooterComponents";
import Home from "./HomeComponent";
import Dishdetails from "./DishdetailComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  addComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  postComment,
  fetchLeaders
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => 
    dispatch(fetchDishes()),

  resetFeedbackForm: () => 
    dispatch(actions.reset("feedback")),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () =>  dispatch(fetchLeaders()),

  postComment:(dishId,rating,author,comment)=>dispatch
  (postComment(dishId,rating,author,comment))
});
class Main extends Component {
  
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leaderLoading={this.props.leaders.isLoading}
          leaderErrMess={this.props.leaders.errMess}
        />
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <Dishdetails
          dish={
            this.props.dishes.dishes.filter(
              (dish,index) => dish.id === parseInt(match.params.id, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment,index) => comment.dishId === parseInt(match.params.id, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
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
            component={() => <About leaders={this.props.leaders} />}
          />

          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route exact path="/menu/:id" component={DishWithId} />
          <Route
            exact
            path="/contact"
            component={() => (
              <Contact resetFormFeedback={this.props.resetFormFeedback} />
            )}
          />

          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
