import React,{useState} from 'react';
import "../Register/Register.css";
import {Link} from 'react-router-dom';
export default function Register() {

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [age, setage] = useState('');
    const [city, setcity] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

   // console.log(firstname+lastname+city+age+email+password)

    function registerUser() {
      if(password.length<6)
      {
        alert("Password length sholud be greater then 6 character")
      }
      else{
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
        
    }
    return (
          <div class="container d-flex align-items-center justify-content-center align-center my-auto " style={{minHeight:"800px"}}>
            <div class="card main m-5" >
                    <div class="row" style={{minHeight:"600px"}}>
                        <div class=" col-lg-5 col-md-5 col-sm-12 col-xs-12">
                               
                           <img src="images/signup1.jpg" alt="Paris" class="center imgLogin" width="100%" height="100%"/>       
                                
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 d-flex  justify-content-center align-items-center">
                            <div class="d-flex justify-content-center align-self-center"> 
                                <form class="myFormLogin text-center">
                                    <h2 className="my-4 header">Create New Account</h2>
                                    <div class="form-group">
                              <i class="fas fa-user fa-lg"></i>
                              <input class="myInput text-center" type="text" placeholder="Firstname" onChange={(e) => setfirstname(e.target.value)} required/> 
                          </div>

                          <div class="form-group">
                              <i class="fas fa-user fa-lg"></i>
                              <input class="myInput text-center" type="text" placeholder="Lastname" onChange={(e) => setlastname(e.target.value)} required/> 
                          </div>

                          <div class="form-group">
                              <i class="fas fa-birthday-cake fa-lg"></i>
                              <input class="myInput text-center" type="text" placeholder="Age" onChange={(e) => setage(e.target.value)} /> 
                          </div>

                          <div class="form-group">
                              <i class="fas fa-city"></i>
                              <input class="myInput text-center" type="text"  placeholder="City" onChange={(e) => setcity(e.target.value)}/> 
                          </div>
                                    <div class="form-group">
                                        <i class="fas fa-envelope"></i>
                                        <input class="myInput text-center"  type="text"   placeholder="Email" onChange={(e) => setemail(e.target.value)} required/> 
                                    </div>
        
                                    <div class="form-group">
                                        <i class="fas fa-lock fa-lg"></i>
                                        <input class="myInput text-center" type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} required/> 
                                    </div>
                        
                                    <button className="butt text-center" type="button" onClick={registerUser}>CREATE ACCOUNT</button>
                                    <p className="text-center my-4 mb-5">Already have an account?<Link to="/login" className="px-1">Login</Link> </p>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

    )
}
 