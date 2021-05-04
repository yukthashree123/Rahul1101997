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
import { useReducer,useState } from 'react';
import  reducer,{Email} from './Reducer/Reducer';
import AppContext from './AppContext';

function App() {

    const [state, dispatch] = useReducer(reducer, Email);

    const [isLoggedIn, setIsLoggedIn] = useState(authentication.isLoggedInfun());
  function loginHandlerFunction(status) {
    setIsLoggedIn(status);
}
let check=authentication.isLoggedInfun();
  return (
      <Router>
         <Header loginStatus={isLoggedIn}/>
          <Switch>
          <AppContext.Provider value={[state, dispatch]}>
          <Route exact path="/" component={Home}/>
            <Route exact path="/favrouite" component={() => check? <FavrouiteRes /> : <Redirect to="/login" />}/>
            <Route exact path="/login" component={()=> <Login loginHandler={loginHandlerFunction}/>}/>
            <Route exact path="/logout" component={()=> <Logout loginHandler={loginHandlerFunction}/>}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/resdetail/:id" component={Restaurant} />
           
            </AppContext.Provider>
          </Switch>
      </Router>
  );
}

export default App;
