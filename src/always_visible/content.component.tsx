import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginComponent from '../components/login.component';
import EhomeComponent from '../components/ehome.component';
import MhomeComponent from '../components/mhome.component';
import SubmitRR from '../components/srr.component';
import EmpRRComponent from '../components/emprr.component';
import EmpResRRComponent from '../components/empresrr.component';
import ViewEditProfComponent from '../components/vieweditprof.component';

interface ContentProps {
    history: any
  }

const ContentComponent: React.FC<ContentProps> = (props) => {

    const [empOrMan, setEmpOrMan] = useState('');
    let roleString:string;

    return(
        <Switch>

          <Route exact path="/" component={LoginComponent} />

          <Route path="/employee" component={EhomeComponent}/>
          <Route path="/manager" component={MhomeComponent}/>

          <Route path="/employee/srr" component={SubmitRR}></Route>
          <Route path="/employee/viewrr" component={EmpRRComponent}></Route>
          <Route path="/employee/viewresrr" component={EmpResRRComponent}></Route>
          <Route path="/employee/vieweditprof" component={ViewEditProfComponent}></Route>

        </Switch>
        );
}

export default ContentComponent;