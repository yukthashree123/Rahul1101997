import React from 'react'
import './RestaurantDetail.css';
export default function RestaurantDetail(props) {
   // console.log(props.data);
    return (
       <div>
             <div className="row">
               <div className="col-md-12 mt-5 img-hover-zoom--blur">
                   <img src={props.data.featured_image} alt="not found" className="center" width="100%" height="500px" />
               </div>
           </div>
           <div className="row">
               <div className="col-md-8">
                   <div>
                       <h1 className="fw-bolder">{props.data.name}</h1>
                       <h4 >{props.data.cuisines}</h4>
                       <h5 >Timings: {props.data.timings}</h5>
                       <h5 >Address: {props.data.location.address}  {props.data.location.zipcode}</h5>
                       <h5>{props.data.location.city}</h5>
                       
                   </div>
               </div>
               <div className="col-md-4">
                   <div className="card py-5 px-4 my-3">
                   <h5>Phone:-{props.data.phone_numbers}</h5>
                   <h5>Average Cost: <span className="fs-6">{props.data.currency} {props.data.average_cost_for_two} for {props.data.price_range} person(s)</span></h5>
                   
                   </div>
                </div>
           </div>

            
            <div class="card my-3">
            <h4 className="fw-bold p-2">Highlights</h4>
               <ul class="list-group">
               <div className="row">
               
               {props.data.highlights.map(item=><div className="col-md-3"><li class="list-group-item d-flex justify-content-between align-items-center border border-0" style={{minHeight:"50px"}}>
                    <span className="fs-5">{item}</span>
                        <span class="badge text-center"><i class="fas fa-check fa-lg bg-success rounded-circle text-white p-2"></i></span>
                    </li></div>
                   )}
                     </div>
                </ul>
                </div> 
                </div>
    )
}
