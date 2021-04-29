import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import authentication from './Components/Service/authentication';
import {BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router >
        <Header/>
          <Switch>
                <Route exact path="/" component={() => authentication.isLoggedIn ? <Home /> : <Redirect to="/login" />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
