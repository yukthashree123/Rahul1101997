import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
   }));      

export default function LoginForm() {

    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div >
           <form className={classes.root} className="back" noValidate autoComplete="off">
               <div className="display">
            
            
          <div className="mb-2">
               <TextField required id="name" onChange={(e)=>setUsername(e.target.value)} label="Name" />
          </div>
             
           <div className="mb-2">
               <TextField id="password" required onChange={(e)=>setPassword(e.target.value)} type="password" label="Password" />
           </div>
               <div className="mb-2">
                   <Button variant="contained" id="btnlogin" >
                          Login  
                  </Button>
                 
               </div>
               </div>
               
               </form>
       </div>
   
    )
}
