import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Navigation from './components/Navigation';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/index';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Provider store={store}>
            <div className="App">
              <Navigation />
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
              <Route exact path={process.env.PUBLIC_URL + '/SignIn'} component={SignIn} />
              <Route exact path={process.env.PUBLIC_URL + '/SignUp'} component={SignUp} />
            </div>
          </Provider>
        </Switch>
      </Router>      
    );
  }
}

export default App;