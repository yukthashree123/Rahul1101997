import React,{useEffect,useState} from 'react'
import './RestaurantDetail.css';
export default function RestaurantDetail(props) {

    const [details, setDetails] = useState([]);
    const [loading, setloading] = useState(true);

   
        useEffect(async() => {    
            setloading(true);      
                await fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${props.match.params.id}`,{
                        "method": "GET",
                        headers: {
                           'user-key':'7749b19667964b87a3efc739e254ada2'
                        }
                    })
                    .then(res=>res.json())
                    .then(data=>{ setDetails(data);
                       setloading(false);
                       console.log(data);
                    });  
           
        }, []);
    return (

        <div className="container">
           <div className="row">
               <div className="col-md-12 mt-5 img-hover-zoom--blur">
                   <img src={details.featured_image} alt="image not found" className="center" width="100%" height="500px" />
               </div>
           </div>
           <div className="row">
               <div className="col-md-8">
                   <div>
                       <h1 className="fw-bolder">{details.name}</h1>
                       <h4 >{details.cuisines}</h4>
                       <h5 >Timings: {details.timings}</h5>
                       {/* <h5 >Address: {details.location.address}  {details.location.zipcode}</h5>
                       <h5>{details.location.city}</h5>
                        */}
                   </div>
               </div>
               <div className="col-md-4">
                   <div className="card py-5 px-4 my-3">
                   <h5>Phone:-{details.phone_numbers}</h5>
                   <h5>Average Cost: <span className="fs-6">{details.currency} {details.average_cost_for_two} for {details.price_range} person(s)</span></h5>
                   
                   </div>
                </div>
           </div>

            
            <div class="card my-3">
            <h4 className="fw-bold p-2">Highlights</h4>
               <ul class="list-group">
               <div className="row">
               
               {/* {details.highlights.map(item=><div className="col-md-3"><li class="list-group-item d-flex justify-content-between align-items-center border border-0" style={{minHeight:"50px"}}>
                    <span className="fs-5">{item}</span>
                        <span class="badge text-center"><i class="fas fa-check fa-lg bg-success rounded-circle text-white p-2"></i></span>
                    </li></div>
                   )} */}
                     </div>
                </ul>
                </div>
        </div>
    )
}
