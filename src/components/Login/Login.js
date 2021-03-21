import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import {  FaFacebookF, FaGoogle } from 'react-icons/fa'

import firebaseConfig from './firebaseConfig';
import { useContext } from 'react';
import {userContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const Login = () => {
  // const [user, setUser] = useState({
  //   isSignedIn: false,
  //   name: '',
  //   email:'',
  //   photo: ''
  // })
    let history = useHistory();
    let location = useLocation();
    
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const[formData,setFormData]=useState({email:null, password:null})
    const [user, setUser]=useState()
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
     
     var provider = new firebase.auth.GoogleAuthProvider();
     var FBprovider = new firebase.auth.FacebookAuthProvider();
    //  const SinProvider = new firebase.auth.GoogleAuthProvider();
    //  const handleSignIn = () =>{
    //   firebase.auth().signInWithPopup(provider)
    //   .then(res => {
    //     const {displayName, photoURL, email} = res.user;
    //     const signedInUser = {
    //       isSignedIn: true,
    //       name: displayName,
    //       email: email,
    //       photo: photoURL
    //     }
    //     setUser(signedInUser);
     
    //     console.log(displayName, email, photoURL);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     console.log(err.message);
    //   })
    // }
  
    // const handleSignOut = () => {
    //   firebase.auth().signOut()
    //   .then(res => {
    //     const signedOutUser = {
    //       isSignedIn: false, 
    //       name: '',
    //       phot:'',
    //       email:'',
    //       password:'',
    //       error:'',
    //       isValid:false,
    //       existingUser: false
    //     }
    //     setUser(signedOutUser);
    //     console.log(res);
    //   })
    //   .catch( err => {
  
    //   })
    // }
  
    // const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email); 
    // const hasNumber = input => /\d/.test(input);
    
    // const switchForm = e =>{
    //   const createdUser = {...user};
    //   createdUser.existingUser = e.target.checked;
    //   setUser(createdUser);
    // }
    // const handleChange = e =>{
    //   const newUserInfo = {
    //     ...user
    //   };
    //   //debugger;
    //   // perform validation
    //   let isValid = true;
    //   if(e.target.name === 'email'){
    //     isValid = is_valid_email(e.target.value);
    //   }
    //   if(e.target.name === "password"){
    //     isValid = e.target.value.length > 8 && hasNumber(e.target.value);
    //   }
  
    //   newUserInfo[e.target.name] = e.target.value;
    //   newUserInfo.isValid = isValid;
    //   setUser(newUserInfo);
    // }
  
    // const createAccount = (event) => {
    //   if(user.isValid){
    //     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    //     .then(res => {
    //       console.log(res);
    //       const createdUser = {...user};
    //       createdUser.isSignedIn = true;
    //       createdUser.error = '';
    //       setUser(createdUser);
    //       setLoggedInUser(createdUser)
    //       history.replace(from);
        
         
    //     })
    //     .catch(err => {
    //       console.log(err.message);
    //       const createdUser = {...user};
    //       createdUser.isSignedIn = false;
    //       createdUser.error = err.message;
    //       setUser(createdUser);
    //     })
    //   }
    //   event.preventDefault();
    //   event.target.reset();
    // } 
  
    // const signInUser = event => {
    //   if(user.isValid){
    //     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    //     .then(res => {
    //       console.log(res);
    //       const createdUser = {...user};
    //       createdUser.isSignedIn = true;
    //       createdUser.error = '';
    //       setUser(createdUser);
        
        
    //     })
    //     .catch(err => {
    //       console.log(err.message);
    //       const createdUser = {...user};
    //       createdUser.isSignedIn = false;
    //       createdUser.error = err.message;
    //       setUser(createdUser);
    //     })
    //   }
    //   event.preventDefault();
    //   event.target.reset();
    // }
  
  
  const onChangeHandler = (e) => {
    const key = e.target.name
    setFormData({...formData, [key] : e.target.value})
  }

  const signIn = (e) => {
    e.preventDefault();
   firebase.auth().createUserWithEmailAndPassword(formData.email,formData.password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      setUser(user);
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      console.log(errorCode,errorMessage);
    });
   

  }

const signUp = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode);
      // ..
    });
  }








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

     const handleFacebookSign=()=>{
        firebase
        .auth()
        .signInWithPopup(FBprovider)
        .then((result) => {
          
         
      
          
          var user = result.user;
          console.log(user);
      
          
      
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
      
          // ...
        });



     }

    return (
        
        <div className="container ">
         


         <Form  className="form my-4">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" type="email" onChange={(e) =>  onChangeHandler(e)} placeholder="Enter email" />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password"  placeholder="required" type="password" onChange={(e) =>  onChangeHandler(e)} placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
 
  </Form.Group>
  <Form.Group className="my-4" >
    
    <Button  variant="primary" onClick={signUp}   type="submit"> register </Button >
       
      <Button  variant="primary" onClick={signIn}   type="submit"> login   </Button > 
  
  </Form.Group>
  
</Form>
  

        <hr/>
        <button onClick={handleGoogleSign} ><FaGoogle /></button> 
        <button onClick={handleFacebookSign} > <FaFacebookF />   </button>
        </div>
    );
};

export default Login;