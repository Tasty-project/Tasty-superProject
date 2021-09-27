import './App.css';
import React, { Component } from 'react';
import Category from './components/Category';
import SubCategory from './components/SubCategory';
import SocialMedia from './components/SocialMedia';
import TastyItem from './components/TastyItem';
import Random from './components/Random'
import SearchItems from './components/SearchItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Category} />
          <Route path="/random" component={Random} />
          <Route path="/:strCategory" exact component={SubCategory} />
          <Route path="/search/:idMeal" exact component={TastyItem} />
          <Route path="/:strCategory/:idMeal" component={TastyItem} />
        </Switch>
        <SocialMedia />
      </Router>);
  }
}

export default App;