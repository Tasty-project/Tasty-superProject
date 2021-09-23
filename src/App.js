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
=======
<<<<<<< HEAD
        <Route path="/" exact component={Home}/>
       
        <Route path="/:strCategory" component={SubCategory}/>
          
      
=======
<<<<<<< HEAD
>>>>>>> 675e5a8bf65a18ceb0da6ed80dc833ea537960a4
      <Switch>

        <Route path="/" exact component={Category} />
        <Route path="/:strCategory" component={SubCategory} />

>>>>>>> 8d0c3f3decc48af65009c9328d6c9ddd174e7edd
      </Switch>
      <SocialMedia></SocialMedia>
    </Router>
  );
}

export default App;