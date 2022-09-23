import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import UseEffectAjaxPatientComponent from './Components/ProjectAPI/UseEffectAjaxPatientComponent';
import { CreateDoctor } from './Components/ProjectAPI/Doctor/CreateDoctor';
import {CreateCharges} from './Components/ProjectAPI/Charges/CreateCharges';
import ReportComponent from './Components/ProjectAPI/Reports/ReportComponent';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));



      
     
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/patient" element={<><App/><UseEffectAjaxPatientComponent/></>} />
      <Route path="/doctor" element={<><App/><CreateDoctor/></>} />
      <Route path="/charges" element={<><App/><CreateCharges/></>} />
      <Route path="/report" element={<><App/><ReportComponent/></>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
