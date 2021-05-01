import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from '../HomeCard/HomeCard';
export default function Home() {
   // const [data, setData] = useState([]);
    const [data, setData] = useState([]);
    const [latitude, setlatitude] = useState('');
    const [longitude, setlongitude] = useState('');
    const [loading, setloading] = useState(true);

    useEffect(async() => {
       setloading(true);
        getLocation();
         await fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`,{
            "method": "GET",
            headers: {
               'user-key':'7749b19667964b87a3efc739e254ada2'
            }
        })
          .then(res=>res.json())
          .then(data=>{console.log(data.nearby_restaurants);
              setData(data.nearby_restaurants);
             setloading(false);
             console.log(data);
          });  
    },[latitude,longitude]);

  
    function getLocation()
    {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
           } 
        function showPosition(position) {
            setlatitude(position.coords.latitude); 
            setlongitude(position.coords.longitude);  
          }
    }

   console.log(latitude+" "+longitude);

      //console.log(data[4].restaurant.name);
    return (
        <div data-testid="containertest" className="container mt-2" style={{minHeight:"700px"}}>

        <div className="row mt-3">
          <div className="col-md-1"></div>
            <div className="col-md-10 p-2">
                <h2 className="text-center text-primary" id="h2id">Welcome To Foodie</h2>
            </div>
            <div className="col-md-1 p-2 mt-2">
                <Link to="/logout" id="logoutBtn" className="text-danger">Logout <i className="fas fa-sign-out-alt"></i></Link>
            </div>
        </div>
        <div className="row">
            {loading?<div><img src="images/loading1.gif" width="100%"/></div>:data.map(item=><HomeCard key={item.restaurant.id} id={item.restaurant.id} resName={item.restaurant.name} image={item.restaurant.featured_image} cuisines={item.restaurant.cuisines} address={item.restaurant.location.address} average={item.restaurant.average_cost_for_two} rating={item.restaurant.user_rating.aggregate_rating}/>)}
            </div>
    </div>
    )
}
 