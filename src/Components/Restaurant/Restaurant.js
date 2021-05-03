import React,{useState,useEffect} from 'react'
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';

export default function Restaurant(props) {
    const [details, setDetails] = useState({});
    //const [loading, setloading] = useState(true);

        useEffect(async() => {    
           // setloading(true);      
               const data= await fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${props.match.params.id}`,{
                        "method": "GET",
                        headers: {
                           'user-key':'7749b19667964b87a3efc739e254ada2'
                        }
                    })
                    .then(res=>res.json())
                    .then((data)=>data); 
                    setDetails({data:data})
        },[]);
        console.log(details);
       // console.log(details.location.address);
    return (
        <div className="container">
           {
               (details.data!==undefined)?(
               <div>
                   <RestaurantDetail data={details.data}/>

               </div>):(<div><img src="images/loading.gif" alt="" width="100%"/></div>)

           }
        </div>
    )
}
