import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://zomato62.p.rapidapi.com/cuisines?city_id=109", {
            "method": "GET",
            headers: {
                "x-rapidapi-key": "558cddea1bmsh7e4ddedb1f11d5cp19217cjsnb31aa60a5e27",
                "x-rapidapi-host": "zomato62.p.rapidapi.com"
            }
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
    });

    return (
        <div data-testid="containertest" className="container mt-2" style={{minHeight:"700px"}}>

        <div className="row mt-3">
          <div className="col-md-1"></div>
            <div className="col-md-10 p-2">
                <h2 className="text-center text-primary" id="h2id">Trending News</h2>
            </div>
            <div className="col-md-1 p-2 mt-2">
                <Link to="/logout" id="logoutBtn" className="text-danger">Logout <i className="fas fa-sign-out-alt"></i></Link>
            </div>
        </div>
        <div data-testid="carddiv" className="row">
          {/* {
             ( () => {

              if(wait==="true")
              {
                return(<h1 className="text-center text-primary fw-bold">Please Wait News Is Coming......</h1>)
              }
                
            })()

          } */}
{/* 
            {
               data.map(item=><Card key={item.title} title={item.title} author={item.author} imageUrl={item.urlToImage} url={item.url} description={item.description}/>)
                         
            } */}
        </div>
    </div>
    )
}
