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
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};
const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) =>
  dispatch(addComment(dishId, rating, author, comment))
  });
class Main extends Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     dishes: DISHES,
    //     comments: COMMENTS,
    //     promotions: PROMOTIONS,
    //     leader: LEADERS,
    //     selectedDish: null,
    //   };
    // }
    // onSelectDish(dishId) {
    //   this.setState({
    //     selectedDish: dishId,
    //   });
    // }
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <Dishdetails
        dish={this.props.dishes.filter((dish,index) => dish.id ===
          parseInt(match.params.id,10))[0]}
          comments={this.props.comments.filter((comment,index) => comment.dishId ===
          parseInt(match.params.id,10))}
          addComment={this.props.addComment}
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
            component={() => <About leaders={this.props.leaders} />}
          />

          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
