import './App.css';
import Home from './components/Home';
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
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/:strCategory" component={SubCategory}>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;