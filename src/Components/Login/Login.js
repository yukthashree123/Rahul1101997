import React,{useState} from 'react'

import './Login.css';
import authentication from '../Service/authentication';
import {Link,useHistory} from 'react-router-dom';
export default function Login() {

  let history=useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 async function Login() {
   const res = await fetch('http://localhost:9000/auth/login', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({ email, password })
     });
     const data = await res.json();
     console.log(data);
     
     if(data.status===401)
     {
       alert(data.message);
     }
     localStorage.setItem('token', data.access_token);
     await authentication.Login();
    history.push('/');
  }

    return (
      <div class="container d-flex justify-content-center align-items-center">
      <div class="card">
          <div class="row">
              <div class="col-md-6 formColor " >
         {/* <h1> Welcome to Foodie</h1> */}
         
       <div className="loginbox">
       {/* <i class="fas avathar fa-user-circle fa-3x"></i> */}
           <h2 class="text-center text-dark mt-5 p-2">Login</h2>
         <div className="txtbox">
             <form>
                   <div className="text-center mt-3">
                           <i  className="fas  fa-user p-1"></i>
                           <input type="text" placeholder="username" onChange={(e) => setEmail(e.target.value)}/>
                   </div><br/>
                   <div className="text-center">
                           <i className="fas fa-key p-1"></i>
                           <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                   </div><br/>
                   <div className="text-center"><button type="button" onClick={Login} >Login</button></div>
                   <h5>Don't have an account? <Link style={{color:'rgb(213, 224, 219)'}} to="/register">Sign up</Link></h5>
             </form>
  
         </div>
       </div>
  
  
        </div>
              <div class="col-md-6">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="images/carousel1.jpg" class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item">
                        <img src="images/carousel5.jpg" class="d-block w-100" alt="..." /> 
                      </div>
                      <div class="carousel-item">
                        <img src="images/carousel4.jpg" class="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon  bg-dark" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
              </div>
          </div>
      </div>
  </div>

  
    )
}
