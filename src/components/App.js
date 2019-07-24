import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegistryPage from '../pages/RegistryPage';
import Protected from './Protected';
import { connect } from 'react-redux';

import Header from './Header';
import history from '../browserHistory';
import { logout } from '../store/actions/auth.action';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Header
            isLogin={this.props.auth.isLogin}
            checkLoginCompleted={this.props.auth.checkLoginCompleted}
            logout={this.props.logout}
            checkLogin={this.props.checkLogin}
          />
          <div>
            <Switch>
              <Route path="/login" exact component={LoginPage} />
              <Route path="/registry" exact component={RegistryPage} />
              <Route path="/" component={Protected} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps, { logout })(App);