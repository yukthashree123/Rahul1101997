import React,{useState,useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './HomeCard.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import authentication from '../../Service/authentication';
import Heart from 'react-animated-heart';
import {Link} from 'react-router-dom';
import AppContext from '../../AppContext';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    border:'1px solid #000',
    margin:'auto',
    backgroundColor:'black',
    fontFamily:'poppins'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor:  'rgb(22,185,178)',
    fontWeight:600
  },

  rating:{
    display: 'flex',
    flexDirection: 'column',
    color:'white',
    '& > * + *': {
      marginTop: theme.spacing(1)
    },
  },
}));

export default function HomeCard(props) {

  const [state,dispatch] = useContext(AppContext);
  const classes = useStyles();
  let history=useHistory();
  const [isClick, setClick] = useState(false);
  const [fav, setFav] = useState([]);
  const [data, setData] = useState([]);

    useEffect(() => {

      fetch('http://localhost:3001/favrouites')
      .then(res=>res.json())
      .then(data=>{
      //  console.log(data);
        setData(data);
      })
    });      

    // console.log(data);

     function  addFav(id) {
      setData(data);
          let favstatus= data.find(f => {
                return f.Rid === id;
               });

              console.log(favstatus);
        //  console.log("Rahul");
           if(authentication.isLoggedIn)
           {

            if(favstatus===undefined)
            {
                fetch('http://localhost:3001/favrouites', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                  },
                  body: JSON.stringify({ 
                    Rid:props.id,
                    ResName:props.resName,
                    ResImage:props.image,
                    ResCuisines:props.cuisines,
                    ResRating:props.rating,
                    ResAverage:props.average,
                    ResAddress:props.address,
                    Email:state
                   })
              })
              .then(setClick(!isClick));
                
            }
            else
            {
              alert("item already exist");
            }
          }
        else
        {
          history.push('/login')
        }
          
  }
    return (

     <div className="col-md-4 col-sm-12 col-xs-12 mb-4 cardHome">
            <Card className={classes.root}>
            <CardHeader 
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {props.resName[0]}
                </Avatar>
              }
              title={
               <h3 className="text-white"> {props.resName} </h3>
              }
            />
            <CardMedia
              className={classes.media}
              
              image={props.image}
            />
            <CardContent className="bg-dark ">

              <Typography variant="body2"  component="p">
               <h5 className="text-white">Cuisines: {props.cuisines}</h5>
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
              <h5 className="text-white">Average cost : Rs. {props.average}</h5>
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
              <h5 className="text-white">Address:   {props.address} </h5>
              </Typography>
              <Typography variant="body2" component="p"  className={classes.rating}>
              <Rating name="half-rating-read"  defaultValue={props.rating} precision={0.5} size="large" readOnly />
               
                </Typography>
            </CardContent> 

            <CardActions disableSpacing className="bg-dark">
              <div className="w-100">
            <div className="float-start">
               <abbr title="Add To Favrouite"> <Heart isClick={isClick} onClick={addFav.bind(this,props.id)} /></abbr>
            </div>
            
            <div className="float-end  mt-4 pt-2 w-25 " >
            <abbr title="More Details" style={{cursor:"pointer"}}> <Link to={`/resdetail/${props.id}`}><i className="fas fa-angle-double-right text-light fa-2x pr-2"></i></Link></abbr>
            </div>
            </div>
            </CardActions>
          </Card>
            
            
          </div>
                          
     
    )
}
