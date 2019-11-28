import React from 'react';
import SignUp from './components/SignUp/SignUp';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* <Route component={SignUp} /> */}
      <Route exact path="/signup" component={SignUp}/>
    </>
  );
};

export default App;