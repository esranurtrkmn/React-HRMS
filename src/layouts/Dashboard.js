import React, { Component } from 'react'
import { Button, Dropdown, Menu, Grid, Segment, MenuItem } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import Footer from './Footer';
import Homepage from './Homepage';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import JobAdvertList from '../pages/JobAdvertList';
import SignUpEmployer from '../pages/SignUpEmployer';


export default function () {
    return (
        <div>

            <Route exact path='/' component={Homepage} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={SignIn}/>
            <Route exact path='/' component={Footer} />
            <Route exact path='/jobadverts' component={JobAdvertList} />
            <Route exact path='/signupemployer' component={SignUpEmployer} />

        </div>
    )
}
