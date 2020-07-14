import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import HeaderComponent from './always_visible/header.component';
import ContentComponent from './always_visible/content.component';
import Axios from 'axios';

const App: React.FC = () => {

  return (

    // Axios.interceptors.request.use((req) => req, (error) => console.log(error));
    
    <main className="container">
      <BrowserRouter>

        <Route path="/" component={HeaderComponent}></Route>
        <Route path="/" component={ContentComponent}></Route>

      </BrowserRouter>
    </main>
  
  );
  
}

export default App;
