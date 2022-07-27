import './App.css';
import React,{Component} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from './components/MainComponent';
import {BrowserRouter} from "react-router-dom";

class App extends Component {
  
  render(){
    return (
    <div className='App'>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
      
    </div>
    );
  }
}

export default App;