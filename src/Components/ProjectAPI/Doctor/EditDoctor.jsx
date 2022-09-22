import React, { useState, useEffect } from "react";
const EditDoctor = (props) => {
  const [patientData, setPatientData] = useState({
    name: "",
    fees: 0,
    specialization: "",
    emp_Type: "",
  });
  // console.log(patientData);
  useEffect(() => {
    setPatientData(props.editedPatientDataa);
  }, []);

  const passEditPatientData = () => {
    props.editedPatientDataFunc(patientData);
    props.putData(props.passId, patientData);
  };

  return (
    <div>
      <h3>EditPatient</h3>
      <input
        value={patientData.name}
        onChange={(e) =>
          setPatientData({ ...patientData, name: e.target.value })
        }
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, fees: e.target.value })
        }
        value={patientData.fees}
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, specialization: e.target.value })
        }
        value={patientData.specialization}
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, emp_Type: e.target.value })
        }
        value={patientData.emp_Type}
      ></input>

      <button onClick={passEditPatientData}>Change</button>
    </div>
  );
};

export default EditDoctor;
