import React from 'react';
import ViewEditProfComponent from './vieweditprof.component';
import { Switch, Route, Link } from 'react-router-dom';
import SubmitRR from './srr.component';
import EmpRRComponent from './emprr.component';
import EmpResRRComponent from './empresrr.component';
import EmpNavComponent from './empnav.component';
import LoginComponent from './login.component';

const EhomeComponent: React.FC = () => {

    return(

        // Employee Homepage
        <section id="homepage-employee">
          <div className="panel-title">Employee Options</div>
          <EmpNavComponent></EmpNavComponent>

          <Switch>
            <Route path="/employee/srr" component={SubmitRR}></Route>
            <Route path="/employee/viewrr" component={EmpRRComponent}></Route>
            <Route path="/employee/viewresrr" component={EmpResRRComponent}></Route>
            <Route path="/employee/vieweditprof" component={ViewEditProfComponent}></Route>
            {/* <Route path="/" component={LoginComponent}></Route> */}
          </Switch>

        </section>
    );
}

export default EhomeComponent;