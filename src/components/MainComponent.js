import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from "./MenuComponent";
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponents';
import Footer from './FooterComponents';

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
        return (
            
                <div className='App'>
       {/* { <Navbar  color='danger'> 
      <div className='container'>
        <NavbarBrand href="/" >Ristorante Con Fusion</NavbarBrand>
      </div>
      </Navbar> */
     }
     {/* <nav class="navbar navbar-danger bg-danger">
     <Navbar className="container" color='danger' dark> 
    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </Navbar>
       </nav> */}
       <Header />
  
      <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onSelectDish(dishId)}
      selectedDish={this.state.selectedDish}/>
        <Footer/>
        </div>
            
        );
    }
}
export default Main;