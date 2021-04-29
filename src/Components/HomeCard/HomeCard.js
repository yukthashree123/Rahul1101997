import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80%',
    border:'1px solid #000',
    margin:'auto'
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
    backgroundColor: red[500],
  },

  rating:{
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HomeCard(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
       <div className="container ">
           <div className="row">
               
               {props.resData.map(item=>(

            <div className="col-md-4">
            <Card className={classes.root}>
            <CardHeader 
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {item.restaurant.name[0]}
                </Avatar>
              }
              title={item.restaurant.name}
             
              
            />
            <CardMedia
              className={classes.media}
              
              image={item.restaurant.featured_image}
            />
            <CardContent>

              <Typography variant="body2" color="textSecondary" component="p">
                {item.restaurant.cuisines}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Average cost : Rs. {item.restaurant.average_cost_for_two}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
              Address:   {item.restaurant.location.address} 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p"  className={classes.rating}>
               Ratings:  <Rating name="half-rating-read" defaultValue={item.restaurant.user_rating.aggregate_rating} precision={0.5} readOnly />
               
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            
            </CardActions>
          </Card>
            
            
          </div>
            
            ))}
        

              
           </div>
        </div>
    )
}
