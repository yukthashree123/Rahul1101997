import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
export default function Header(props) {
  const history = useHistory();
  return (
    <nav class="navbar navbar-expand-lg bg-header">
    <div class="container-fluid">
      <a class="navbar-brand text-dark fw-bold" href="#">Foodzilla</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item  fw-bold">
          <Link to="/" class="nav-link text-dark  active" >Home</Link>
          </li>

          <li class="nav-item  fw-bold">
          <Link to="/favrouite" class="nav-link text-dark  active" >Favrouite</Link>
          </li>
        
        </ul>
                           {
                              props.loginStatus?
                              <ul class="navbar-nav  mb-2 mb-lg-0 float-end">
                                <li class="nav-item fw-bold">  < Link to="/logout" class="nav-link text-dark">Logout</Link>
                                </li>
                             </ul> :
                             <ul class="navbar-nav  mb-2 mb-lg-0 float-end">
                            <li class="nav-item fw-bold">
                              <Link to="/register" class="nav-link text-dark ">Register</Link>
                            </li>
                             <li class="nav-item fw-bold">
                               < Link to="/login" class="nav-link text-dark ">Login</Link>
                             </li>
                          </ul> 
                              
                            }
      </div>
    </div>
  </nav>
    
  );
}
