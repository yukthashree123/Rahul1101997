import React,{useState,useEffect,useContext} from 'react'
import FavCard from '../FavCard/FavCard';
import AppContext from '../../AppContext';
export default function FavrouiteRes() {
  
    const [fav, setFav] = useState([]);
    const [state,dispatch] = useContext(AppContext);
    useEffect( async() => {
        
       await fetch(`http://localhost:3001/favrouites?Email=${state}`,{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => 
                setFav(data));
              
    }, []);

     console.log(fav);
    // function setFavUser()
    // {
    //     let temp=fav.filter(item=>{
    //        // console.log((item.Email===state));
    //         return (item.Email===state);
    //     });
    //    console.log(temp);
    //   // console.log(temp);
    //     setuserfav(temp);
       
    // }
   
    return (
        <div className="container">
        <div className="row my-5">
            {fav.map(item=>(<FavCard key={item.id} resname={item.ResName} image={item.ResImage} cuisines={item.ResCuisines} address={item.ResAddress} average={item.ResAverage} rating={item.ResRating}/>))}
        </div>
        </div>
               
    )
}
