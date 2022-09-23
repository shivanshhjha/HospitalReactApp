import logo from './logo.svg';
//import './App.css';
import UseEffectAjaxPatientComponent from './Components/ProjectAPI/UseEffectAjaxPatientComponent';
import { CreateDoctor } from './Components/ProjectAPI/Doctor/CreateDoctor';
import {CreateCharges} from './Components/ProjectAPI/Charges/CreateCharges';
import ReportComponent from './Components/ProjectAPI/Reports/ReportComponent';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  

  return (

    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hospital App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/patient">Patient</Nav.Link>
            <Nav.Link href="/doctor">Doctor</Nav.Link>
            <Nav.Link href="/charges">Charges</Nav.Link>
            <Nav.Link  href="/report">Report</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    

  );
}

export default App;
