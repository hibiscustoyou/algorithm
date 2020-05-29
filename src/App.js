import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from "./reduxUtils/store";
import Home from "./pages/home";

class App extends Component {
  render() {
      return (
          <Provider store={store}>
              <BrowserRouter>
                  <Switch>
                      <Route path='/' component={Home} />
                      {/*<Redirect to='/chat-page' />*/}
                  </Switch>
              </BrowserRouter>
          </Provider>
      )
  }
}

export default App;
