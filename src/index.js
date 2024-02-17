import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../node_modules/bootstrap/dist/js/bootstrap'

import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Login from './components/login/login';
import '../src/components/feedback/script.js'
import Register from './components/userRegister/userRegister';
import Dashboard from './components/dashboard/dashboard';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //     <LandingPage/>
  //   <UserLogin/>
  //   <App />
  // </React.StrictMode>

  <Router>
  
 
    <Routes>
      <Route path="/" element={<App /> }/>
      <Route path="dashboard" element={<Dashboard /> }/>
       <Route path ="login" element={<Login subtitle="About page subtitle"/>} />  
       <Route path ="register" element={<Register subtitle="About page subtitle"/>} /> 
  
      </Routes>
      <Header/>
     </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
