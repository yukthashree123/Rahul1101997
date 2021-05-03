
const authentication = {
    isLoggedIn: false,
    async Login() {
        await fetch('http://localhost:9000/auth/isAuthenticated ', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data=>{this.isLoggedIn = data.isAuthenticated ;
                // console.log(data);
            });
    },

    async Logout()
    {
     await  fetch('http://localhost:9000/auth/isAuthenticated', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(localStorage.removeItem("token"),
            this.isLoggedIn=false
           
            );
    }
}
export default authentication;