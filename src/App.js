import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import authentication from './Service/authentication';
import {BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import FavrouiteRes from './Components/FavrouiteRes/FavrouiteRes';
import Restaurant from './Components/Restaurant/Restaurant';
import Logout from './Components/Logout/Logout';
import { useReducer } from 'react';
import  reducer,{Email} from './Reducer/Reducer';
import AppContext from './AppContext';

function App() {

    const [state, dispatch] = useReducer(reducer, Email);

  return (
      <Router>
         <Header/>
          <Switch>
          <AppContext.Provider value={[state, dispatch]}>
          <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={() => <Login/>} />
            <Route exact path="/favrouite" component={() => authentication.isLoggedIn ? <FavrouiteRes /> : <Redirect to="/login" />}/>
          
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/resdetail/:id" component={Restaurant} />
           
            </AppContext.Provider>
          </Switch>
      </Router>
  );
}

export default App;
