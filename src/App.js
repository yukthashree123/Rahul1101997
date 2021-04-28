import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router >
        <Header/>
          <Switch>
           <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
           
            {/* {<Route exact path="/logout" component={Logout} />} */}
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
         
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
