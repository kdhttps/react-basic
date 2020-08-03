import React from 'react';
import BlogContextProvider from './contexts/BlogContextProvider'
import { Switch, Route } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Home from './home/home'
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <MDBContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={BlogContextProvider} />
        </Switch>
      </MDBContainer>
    </>
  );
}

export default App;
