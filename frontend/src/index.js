import React from 'react';
import ReactDOM from 'react-dom'; 
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import HomeComponent from './pages/HomeComponent';
import Login from './pages/Login';
import Seller from './pages/SellerComponent';
import LogoutComponent from "./pages/LogoutComponent"
 
import { PrivateRouteNew } from './utils/PrivateRouteNew';

ReactDOM.render(
   <Router>
     <Switch>
       <Route   exact path = "/" component = {Login}/> 
       <Route exact path = "/logout" component = {LogoutComponent}/>
       <PrivateRouteNew exact path = "/home" activepage = "0" page = {<HomeComponent/>}/ > 
       <PrivateRouteNew exact path = "/seller" activepage = "1" page = {<Seller/>}/ >       
     </Switch>
   </Router>
   ,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
