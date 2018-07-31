import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./ducks/store";
import { HashRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Nav />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
