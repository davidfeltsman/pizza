import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home-page/Home';
import Basket from './components/basket-page/Basket';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/basket' component={Basket} />
      </Switch>
    </div>
  );
}

export default App;
