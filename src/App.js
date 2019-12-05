import React from 'react';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Login from './components/Login/Login';

import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route exact path="/:category?" component={Main} />
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/login" component={Login} />
    </>
  );
};

export default App;