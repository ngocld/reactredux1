import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import Search from './components/page/search/Search';
import Add from './components/page/add/Add';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;