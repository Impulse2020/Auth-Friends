import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import UserDashBoard from './components/userdashboard';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/privateroute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute path="/dashboard" component={UserDashBoard}  />
      </Switch>
    </div>
  );
}

export default App;
