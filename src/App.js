
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchPage from './components/SearchPage';
import Home from './pages/Home';

const App = () => {
  return (
    // BEM
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;