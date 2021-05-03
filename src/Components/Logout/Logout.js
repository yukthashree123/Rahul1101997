import React from 'react';

import { useHistory } from "react-router-dom";
import authentication from "../../Service/authentication";

export default async function Logout(props) {

    let history = useHistory();

   await authentication.Logout();
   
    history.push('/login')
    // function setUser() {
    //     props.getUser(username);
    // }

    // setUser();
    return (
        <div>
           
        </div>
    )
}
