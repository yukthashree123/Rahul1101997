import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
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
        marginTop: theme.spacing(1)
      },
    },
  }));

export default function FavCard(props) {
    const classes = useStyles();
    return (   
         <div className="col-md-4 col-sm-12 col-xs-12 mb-4">
        <Card className={classes.root}>
        <CardHeader 
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.resname[0]}
            </Avatar>
          }
          title={props.resname}
        />
        <CardMedia
          className={classes.media}
          
          image={props.image}
        />
        <CardContent>

          <Typography variant="body2" color="textSecondary" component="p">
           <b>Cuisines: {props.cuisines}</b>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
           <b> Average cost : Rs. {props.average}</b>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          <b>Address:   {props.address} </b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"  className={classes.rating}>
          <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} size="large" readOnly />
           
            </Typography>
        </CardContent> 
        <CardActions disableSpacing>
        
        </CardActions>
      </Card>
        
        
      </div>


    )
}
