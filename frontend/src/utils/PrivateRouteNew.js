import React from 'react';
import { Route,Redirect  } from 'react-router-dom';
import MainComponent from '../Components/MainComponent';
import AuthHandler from './AuthHandler'
 export var PrivateRouteNew = ({ page , activepage, ...rest})=>{
    return  <Route
        {...rest}
        render={( )=>
        AuthHandler.loggedin()? <MainComponent page={page} activepage = {activepage}/> : <Redirect to='/'/>
        }
    />
}