import React,{useState,useContext} from 'react'
import '../Login/Login.css';
import authentication from '../../Service/authentication';
import {Link,useHistory} from 'react-router-dom';
import AppContext from '../../AppContext';
export default function Login() {

  let history=useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [state,dispatch] = useContext(AppContext);
 async function Login(props) {
   const res = await fetch('http://localhost:9000/auth/login', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({ email, password })
     });
     const data = await res.json();
    // console.log(data);
     
     if(data.status===401)
     {
       alert(data.message);
     }
     localStorage.setItem('token', data.access_token);
     await authentication.Login();
     dispatch({ type: 'PushEmail', value: email })
     history.push('/');
  }

  

    return (
        <div class="container d-flex align-items-center justify-content-center" style={{minHeight:"800px"}}>
            <div class="card main m-5">
                    <div class="row" style={{minHeight:"600px"}}>
                        <div class=" col-lg-5 col-md-5 col-sm-12 col-xs-12">
                               
                        <img class="imgLogin" src="images/signup1.jpg" alt="Paris"  width="100%" height="100%"/>       
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 d-flex  justify-content-center align-items-center">
                                <form class="text-center">
                                    <h2 className="my-4 header">Login</h2>
                                    <div class="form-group">
                                        <i class="fas fa-envelope"></i>
                                        <input class="myInput text-center"  type="text"   placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/> 
                                    </div>
        
                                    <div class="form-group">
                                        <i class="fas fa-lock"></i>
                                        <input class="myInput text-center" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/> 
                                    </div>
                        
                                    <button className="butt text-center " type="button" onClick={Login}>Login</button>
                                    <p className="text-center my-4 mb-5">Don't have an account?<Link to="/register" className="px-1">Register</Link> </p>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>
       
           
  

  
    )
}





