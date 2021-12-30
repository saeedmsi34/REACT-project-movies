import {Redirect,Route, Switch, useHistory} from "react-router-dom"
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Movies from "../Movies/Movies";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import TV from "../TV/TV";
import jwtDecode from "jwt-decode";
import { useEffect} from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Peaple from "../Peaple/Peaple";
import { useState } from "react/cjs/react.development";





 



    function App() {
        let history=useHistory();
        let [loginUser,setLoginUser]=useState(null);
        

        function getUserInfo (){
        
        let encodedToken=localStorage.getItem('userToken')
        
        let useData=jwtDecode(encodedToken);
        console.log(useData)
        setLoginUser(useData)

        }


        useEffect(() => {
            if(localStorage.getItem('userToken')){
              getUserInfo();
            }
             
          }, []);

             function logOut()
        {
            localStorage.removeItem("userToken")
            setLoginUser(null);
            history.push('/login')
        }
            


        
         return (
            <div className="App">
                 <Navbar  logOut={logOut}  loginUser={loginUser}/> 
                {/* <div className='container-fluid'> */}
                <Switch>
                <ProtectedRoute path='/movies' component={Movies} />
                <ProtectedRoute path='/TV' component={TV} />
                <ProtectedRoute path='/Gallery' component={Gallery} />
                <ProtectedRoute path='/Peaple' component={Peaple} />
                <ProtectedRoute path='/home' component={Home} loginUser={loginUser} />
              

              
         
                <Route path='/Register' render={(props) => <Register {...props} /> } />
                <Route path='/Login' render={(props) => <Login {...props} getUserInfo={getUserInfo} /> } />
                <Route path='/Logout' render={() => <Logout /> } />
                <Redirect from='/' exact to='/home/'/>
                </Switch>
                </div>
            // </div>
        )
        
    }

    export default App;


    


