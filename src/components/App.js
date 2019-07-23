import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage';
import LoginPage from './pages/LoginPage';
import RegistryPage from './pages/RegistryPage';
import RequestHistoryDetails from './pages/RequestHistoryDetails';
import RequestHistoryList from './pages/RequestsHistoryList';
import EditProfile from './pages/EditProfile';

import Header from './Header';
import history from '../browserHistory';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={WeatherPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/registry" component={RegistryPage} />
            <Route path="/history/details" component={RequestHistoryDetails} />
            <Route path="/history" component={RequestHistoryList} />
            <Route path="/edit/profile" component={EditProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;