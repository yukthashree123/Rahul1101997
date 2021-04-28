import React,{useState,useEffect} from 'react'

export default function Location(props) {

    const [latitude, setlatitude] = useState('');
    const [longitude, setlongitude] = useState('');
    const [url, seturl] = useState('')
   
   
    function sendurl()
    {
        props.geturl(url);
    }
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } 
          seturl(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`);
          sendurl();
    });
   
      function showPosition(position) {
        setlatitude(position.coords.latitude); 
        setlongitude(position.coords.longitude);  
      }

      console.log(`${latitude} ${longitude}`);


    return (
        <div>
           
        </div>
    )
}
