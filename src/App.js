import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
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

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;