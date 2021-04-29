import React, { useState,useEffect ,useContext} from 'react';
import { Link } from 'react-router-dom';
import HomeCard from '../HomeCard/HomeCard';
export default function Home() {
   // const [data, setData] = useState([]);
    const [data, setData] = useState([]);
    const [latitude, setlatitude] = useState('');
    const [longitude, setlongitude] = useState('');


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } 
          fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=23.1532274&lon=79.9026804`,{
            "method": "GET",
            headers: {
               'user-key':'7749b19667964b87a3efc739e254ada2'
            }
        })
          .then(res=>res.json())
          .then(data=>{console.log(data.nearby_restaurants);
              setData(data.nearby_restaurants);
          });  
    },[]);

    function showPosition(position) {
        setlatitude(position.coords.latitude); 
        setlongitude(position.coords.longitude);  
      }

      //console.log(data[4].restaurant.name);
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
        
            {<HomeCard resData={data}/>}
    </div>
    )
}
