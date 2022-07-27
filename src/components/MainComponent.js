import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from "./MenuComponent";
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dishes:DISHES,
          selectedDish:null
    }

    }
   onSelectDish(dishId){
    this.setState({
        selectedDish:dishId
    })
   }

    render(){
        const HomePage = () => {
        return(
        <Home />
        );
        }
        return (
            
                <div className='App'>
       
       <Header />
          <Switch>
          <Route path='/home' component={HomePage} />
          {/* <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} /> */}
          <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onSelectDish(dishId)}
      selectedDish={this.state.selectedDish}/>
          <Redirect to="/home" />
          </Switch>
      
        <Footer/>
        </div>
            
        );
    }
}
export default Main;