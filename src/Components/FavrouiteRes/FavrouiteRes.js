import React,{useState,useEffect} from 'react'
import FavCard from '../FavCard/FavCard';

export default function FavrouiteRes() {
  
    const [fav, setFav] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/favrouites',{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setFav(data);
               // console.log(data);
            });
    }, []);

    return (
        <div className="container">
        <div className="row my-5">
            {fav.map(item=>(<FavCard key={item.id} resname={item.ResName} image={item.ResImage} cuisines={item.ResCuisines} address={item.ResAddress} average={item.ResAverage} rating={item.ResRating}/>))}
        </div>
        </div>
               
    )
}
