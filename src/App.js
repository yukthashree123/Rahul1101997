import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import Location from './Components/Location/Location';
function App() {
  return (
    <div>
      <Router >
        <Header/>
          <Switch>
           <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
