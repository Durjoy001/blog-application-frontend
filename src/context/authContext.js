import axios from "axios";
import { Redirect } from "react-router-dom";
const {createContext, useState} = require("react");
const AuthContext = createContext();

const AuthProvider = (props) =>{
     const[isLoggedIn,setIsLoggedIn] = useState(
         JSON.parse(localStorage.getItem("isLoggedIn")) || false
     );
     const[user,setUser] = useState(
         JSON.parse(localStorage.getItem("user")) || false
     );
     const logout=()=>{
        localStorage.setItem("isLoggedIn",JSON.stringify(false));
        setIsLoggedIn(false);
        window.localStorage.removeItem('user');
        setUser(null);
        return <Redirect to="/" />
    };
     const login = (userDetails) =>{
         setIsLoggedIn(true);
         localStorage.setItem("isLoggedIn",JSON.stringify(true));
         setUser(userDetails);
         localStorage.setItem("user",JSON.stringify(userDetails));
     };
     return(
         <AuthContext.Provider
            value={
                {
                    isLoggedIn,
                    login,
                    user,
                    logout
                }
            }>
                {
                    props.children
                }
            </AuthContext.Provider>
     )
}

export{ AuthContext,AuthProvider };