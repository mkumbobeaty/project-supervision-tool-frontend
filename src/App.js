import React from 'react';
import './App.css';
import { HashRouter,Switch, Route, Redirect} from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';
import SignIn from './Auth/components/SignIn';
import BaseLayout from './layouts/BaseLayout';


const  App = () => {
  return (
   <div className="App">
      <HashRouter  hashType="hashbang">
        <Switch>
        <Route path="/app" component={BaseLayout} />
          <Route path="/signin" component={SignIn}></Route>
          <Redirect to="/app" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
