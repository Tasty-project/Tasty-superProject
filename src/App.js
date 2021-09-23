import './App.css';
import Category from './components/Category';
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

<<<<<<< HEAD
        <Route path="/" exact component={Home}/>
       
        <Route path="/:strCategory" component={SubCategory}/>
          
      
=======
<<<<<<< HEAD
      <Switch>

        <Route path="/" exact component={Category} />
        <Route path="/:strCategory" component={SubCategory} />
=======
        <Route path="/:strCategory" component={SubCategory}>
        </Route>
>>>>>>> fe189c9aad50eb3fe56f874c55d48829029714b0

>>>>>>> 8d0c3f3decc48af65009c9328d6c9ddd174e7edd
      </Switch>
      <SocialMedia></SocialMedia>
    </Router>
  );
}

export default App;