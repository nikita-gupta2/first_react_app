
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import React,{Component} from "react";
import Menu from './components/Menu';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render(){
    return (
     <div className='App'>
       {/* { <Navbar  color='danger'> 
      <div className='container'>
        <NavbarBrand href="/" >Ristorante Con Fusion</NavbarBrand>
      </div>
      </Navbar> */
     }
       
  <Navbar
    className="my-2"
    color="danger"
    dark
  >
    <NavbarBrand href="/">
    Ristorante Con Fusion
    </NavbarBrand>
  </Navbar>
 
      <Menu/>
  </div>
   
  );
  }
}

export default App;
