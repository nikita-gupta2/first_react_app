import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import React,{Component} from "react";
import Menu from './components/Menu';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {DISHES}  from './shared/dishes';

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    dishes: DISHES

  }
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
     <nav class="navbar navbar-danger bg-danger">
     <Navbar className="container" color='danger' dark> 
    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </Navbar>
  </nav>
  
      <Menu dishes={this.state.dishes}/>
  </div>

  );
  }
}

export default App;