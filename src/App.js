import React from 'react';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route exact path="/:category?" component={Main} />
      <Route exact path="/signup" component={SignUp}/>
    </>
  );
};

export default App;