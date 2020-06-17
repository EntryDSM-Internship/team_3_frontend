import React, { useState } from 'react';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const [token, setToken] = useState({
    "access_token": localStorage.getItem("access_token"),
    "refresh_token": localStorage.getItem("refresh_token")
  });
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth/login" render={() => <Login token={token} setToken={setToken} />} />
        <Route exact path="/auth/signup" component={SignUp} />
        <Route exact path="/landing" render={() => <Landing category="/landing" token={token} setToken={setToken} />} />
        <Route path={"/:category"} render={({ match, location }) => (<Main alertOn={true} token={token} setToken={setToken} component={Main} location={location} match={match} />)}/>
        <Route exact path="/" render={({ location }) => <><Main alertOn={false} location={location} token={token} setToken={setToken} /><Landing alertOn={false} category="/" token={token} setToken={setToken} /></>} />
        <Route render={() => (<h1>Error</h1>)} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;