import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Location from '../Location/Location';
export default function Home() {

    const [data, setData] = useState([]);
    const [url, seturl] = useState('');
    useEffect(async() => {

      await  fetch(url, {
            "method": "GET",
            headers: {
               'user-key':'7749b19667964b87a3efc739e254ada2'
            }
        })
        .then(res=>res.json())
        .then(data => {
           // console.log(data.nearby_restaurants);
            console.log(data.nearby_restaurants[0].restaurant.featured_image);
            console.log(data.nearby_restaurants[0].restaurant.name);
            console.log(data.nearby_restaurants[0].restaurant.location.address);
            console.log(data.nearby_restaurants[0].restaurant.location.zipcode);
            console.log(data.nearby_restaurants[0].restaurant.cuisines);
        })
        .catch(err => {
            console.error(err);
        });
    });

    function geturl(urldata)
    {
        seturl(urldata);
    }

    return (
        <div data-testid="containertest" className="container mt-2" style={{minHeight:"700px"}}>

        <div className="row mt-3">
          <div className="col-md-1"></div>
            <div className="col-md-10 p-2">
                <h2 className="text-center text-primary" id="h2id">Home</h2>
            </div>
            <div className="col-md-1 p-2 mt-2">
                <Link to="/logout" id="logoutBtn" className="text-danger">Logout <i className="fas fa-sign-out-alt"></i></Link>
            </div>
        </div>
        <Location geturl={geturl}/>
        <div data-testid="carddiv" className="row">
        </div>
    </div>
    )
}
