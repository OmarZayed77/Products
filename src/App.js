import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Edit from './containers/edit';
import Products from './containers/products';
import Home from './components/home';
import NotFound from './components/notFound';
import 'element-theme-default';
import NavBar from './components/navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* NavBar Component */}
      <NavBar/>
      {/* Routing Pages */}
      <Switch>
        <Route path="/products/edit/:id" component={Edit}/>
        <Route path="/products" exact component={Products}/>
        <Redirect from="/home" to="/"/>
        <Route path="/" exact component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
