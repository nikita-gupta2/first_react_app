import './App.css';
import React,{Component} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from './components/MainComponent';

class App extends Component {
  
  render(){
    return (
    <div className='App'>
      <Main/>
    </div>
    );
  }
}

export default App;