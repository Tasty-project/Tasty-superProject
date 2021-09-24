import './App.css';
import Category from './components/Category';
import Nav from './components/Nav';
import SubCategory from './components/SubCategory';
import SocialMedia from './components/SocialMedia';
import Random from './components/Random'
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

        <Route path="/" exact component={Category}/>
        <Route path="/random" exact component={Random}/>
       <Route path="/:strCategory"  component={SubCategory}/>
      </Switch>
      <SocialMedia/>
    </Router>
  );
}

export default App;