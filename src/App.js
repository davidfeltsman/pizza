import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import NotFound from './pages/404/NotFound'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Basket from './pages/basket/Basket'


import { fetchPizzas, setLoading } from './redux/actions/actionCreators'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/basket' component={Basket} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App
