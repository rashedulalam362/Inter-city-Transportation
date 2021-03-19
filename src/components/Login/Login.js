import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useContext } from 'react';
import {userContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
     var provider = new firebase.auth.GoogleAuthProvider();
     const handleGoogleSign =()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
       
            const  {displayName,email} = result.user;
            const signInUser={
                name:displayName,email:email
            }
            setLoggedInUser(signInUser);
            history.replace(from);
          // ...
        }).catch((error) => {
        
          var errorCode = error.code;
          var errorMessage = error.message;
         
          var email = error.email;
        
          var credential = error.credential;
          console.log(errorCode,errorMessage,email,credential);
        });
     

     }

    return (
        
        <div>
        <button onClick={handleGoogleSign} >Google SignIn</button>
        </div>
    );
};

export default Login;