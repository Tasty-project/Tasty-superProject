import './App.css';
import Category from './components/Category';
import Nav from './components/Nav';
import SubCategory from './components/SubCategory';
import SocialMedia from './components/SocialMedia';
<<<<<<< HEAD
import TastyItem from './components/TastyItem';
=======
import Random from './components/Random'
>>>>>>> ed5f9357f5f53a79e7623add4c525d00a155bb68
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
<<<<<<< HEAD
        <Route path="/" exact component={Category} />
        <Route path="/:strCategory" exact component={SubCategory} />
        <Route path="/:strCategory/:idMeal" component={TastyItem} />
      </Switch>

      <SocialMedia />

=======

        <Route path="/" exact component={Category}/>
        <Route path="/random" exact component={Random}/>
       <Route path="/:strCategory"  component={SubCategory}/>
      </Switch>
      <SocialMedia/>
>>>>>>> ed5f9357f5f53a79e7623add4c525d00a155bb68
    </Router>
  );
}

export default App;