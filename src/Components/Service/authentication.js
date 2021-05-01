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
                console.log(data);
            });

    }
    
}
export default authentication;