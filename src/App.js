import './App.css';
import Category from './components/Category';
import Nav from './components/Nav';
import SubCategory from './components/SubCategory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>

      <Nav />

<<<<<<< HEAD
      <Switch>

        <Route path="/" exact component={Category} />
        <Route path="/:strCategory" component={SubCategory} />
=======
        <Route path="/:strCategory" component={SubCategory}>
        </Route>
>>>>>>> fe189c9aad50eb3fe56f874c55d48829029714b0

      </Switch>
    </Router>
  );
}

export default App;