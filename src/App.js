import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import People from './components/People.jsx';
import Person from './components/Person.jsx';
import Header from './components/Header.jsx';
import SearchPage from './components/SearchPage.jsx';
import SingleFilm from './components/SingleFilm.jsx';

import './App.css';


function App() {


  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <People />
        </Route>
        <Route path="/people/:personId" exact>
          <Person />
        </Route>
        <Route path="/films/:filmId" exact>
          <SingleFilm />
        </Route>
        <Route path="/search" exact component={SearchPage}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
