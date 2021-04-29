import React,{useState,useEffect} from 'react';
import '../Login/Login.css';
import {Link} from 'react-router-dom';
export default function Register() {

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [age, setage] = useState('');
    const [city, setcity] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    console.log(firstname+lastname+city+age+email+password)

    function registerUser() {
        fetch(`http://localhost:9000/auth/register`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            firstname:firstname, 
            lastname:lastname,
           city:city,
           age:age,
           email:email,
           password:password
         })  
    })
   .then(res=>res.json())
   .then(data=>{
       if(data.status===200)
       {
           alert(data.message);
       }else if(data.status===409)
       {
        alert(data.message);
       }
   })   
    }
    return (
        <div class="container d-flex justify-content-center align-items-center">
      <div class="card">
          <div class="row">
              <div class="col-md-6 formColor " >
         {/* <h1> Welcome to Foodie</h1> */}
         
       <div className="loginbox">
       {/* <i class="fas avathar fa-user-circle fa-3x"></i> */}
           <h2 class="text-center text-dark mt-5 p-2">Register</h2>
         <div className="txtbox">
             <form>
                   <div className="text-center mt-3">
                           <i  className="fas  fa-user p-1"></i>
                           <input type="text" placeholder="firstname" onChange={(e) => setfirstname(e.target.value)} />
                   </div><br/>
                   <div className="text-center">
                           <i className="fas fa-key p-1"></i>
                           <input type="text" placeholder="lastname" onChange={(e) => setlastname(e.target.value)} />
                   </div><br/>
                   <div className="text-center mt-3">
                           <i  className="fas  fa-user p-1"></i>
                           <input type="text" placeholder="age" onChange={(e) => setage(e.target.value)}/>
                   </div><br/>
                   <div className="text-center mt-3">
                           <i  className="fas  fa-user p-1"></i>
                           <input type="text" placeholder="city" onChange={(e) => setcity(e.target.value)} />
                   </div><br/>

                   <div className="text-center">
                           <i className="fas fa-key p-1"></i>
                           <input type="text" placeholder="email" onChange={(e) => setemail(e.target.value)}/>
                   </div><br/>
                   <div className="text-center mt-3">
                           <i  className="fas  fa-user p-1"></i>
                           <input type="password" placeholder="password" onChange={(e) => setpassword(e.target.value)}/>
                   </div><br/>
            
                   <div className="text-center" ><button type="button" onClick={registerUser}>Register</button></div>
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
