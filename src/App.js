import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import { createContext } from 'react';
import { useState } from 'react';
export const userContext=createContext()
function App() { 
  const[loggedInUser,setLoggedInUser]=useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
    name:{loggedInUser.name}
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/vehicle/:id">
              <Destination />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </userContext.Provider>
  );
}

export default App;
