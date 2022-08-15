import "./App.css";
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./configureStore";
const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
