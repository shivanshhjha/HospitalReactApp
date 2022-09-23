import logo from './logo.svg';
import './App.css';
import UseEffectAjaxPatientComponent from './Components/ProjectAPI/UseEffectAjaxPatientComponent';
import { CreateDoctor } from './Components/ProjectAPI/Doctor/CreateDoctor';
import {CreateCharges} from './Components/ProjectAPI/Charges/CreateCharges';
import ReportComponent from './Components/ProjectAPI/Reports/ReportComponent';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <UseEffectAjaxPatientComponent/>
      
      <CreateDoctor></CreateDoctor>
      <CreateCharges></CreateCharges>
      <ReportComponent></ReportComponent>
    </div>
  );
}

export default App;
