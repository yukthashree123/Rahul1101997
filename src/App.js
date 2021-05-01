import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import authentication from './Components/Service/authentication';
import {BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import FavrouiteRes from './Components/FavrouiteRes/FavrouiteRes';
import RestaurantDetail from './Components/RestaurantDetail/RestaurantDetail';

function App() {
  return (
    <div>
      <Router >
        <Header/>
          <Switch>
          <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/resdetail/:id" component={RestaurantDetail} />
            <Route exact path="/favrouite" component={() => authentication.isLoggedIn ? <FavrouiteRes /> : <Redirect to="/login" />}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
