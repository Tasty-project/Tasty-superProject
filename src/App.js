import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import SubCategory from './components/SubCategory';
import SocialMedia from './components/SocialMedia'
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

        <Route path="/" exact component={Home}/>
       
        <Route path="/:strCategory" component={SubCategory}/>
          
      
      </Switch>
      <SocialMedia></SocialMedia>
    </Router>
  );
}

export default App;