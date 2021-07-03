import React, { Component } from 'react'
import { Button, Dropdown, Menu, Grid, Segment, MenuItem } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import Footer from './Footer';
import Homepage from './Homepage';
import SignUp from '../pages/Candidate/SignUp';
import SignIn from '../pages/Candidate/SignIn';
import JobAdvertList from '../pages/JobAdvert/JobAdvertList';
import SignUpEmployer from '../pages/Employer/SignUpEmployer';
import JobAdvertAdd from '../pages/JobAdvert/JobAdvertAdd';
import JobAdvertDetail from '../pages/JobAdvert/JobAdvertDetail';
import EmployerList from '../pages/Employer/EmployerList';
import EmployerDetail from '../pages/Employer/EmployerDetail';
import SignInEmployer from '../pages/Employer/SignInEmployer';
import ConfirmJobAdverts from '../pages/JobAdvert/ConfirmJobAdverts';
import CandidateList from '../pages/Candidate/CandidateList';
import ResumeDetail from '../pages/Resume/ResumeDetail';
import ResumeList from '../pages/Resume/ResumeDetail';


export default function () {
    return (
        <div>

            <Route exact path='/' component={Homepage} />
            <Route exact path='/' component={Footer} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={SignIn}/>           
            <Route exact path='/candidates' component={CandidateList} />
            <Route exact path='/jobadverts' component={JobAdvertList} />
            <Route exact path='/signupemployer' component={SignUpEmployer} />
            <Route exact path='/signinemployer' component={SignInEmployer} />
            <Route exact path="/employers" component={EmployerList}/>
            <Route exact path="/employers/:id" component={EmployerDetail}/>
            <Route exact path="/jobadvertadd" component={JobAdvertAdd}/>
            <Route exact path="/jobadverts/:id" component={JobAdvertDetail}/>
            <Route exact path="/jobadvertconfirm" component={ConfirmJobAdverts}/>
            <Route exact path="/resumes/:id" component={ResumeDetail}/>
            <Route exact path="/resumes" component={ResumeList}/>

        </div>
    )
}
