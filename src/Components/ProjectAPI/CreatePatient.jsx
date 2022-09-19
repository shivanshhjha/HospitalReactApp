import React, { useState, useEffect } from "react";
import {CreateIPDPatient} from './CreateIPDpatient';
export const CreatePatient = (props) => {
  const [bool, setBool] = useState(false);
  const [patientData, setPatientData] = useState({
    first_Name: "",
    middle_Name: "",
    last_Name: "",
    mobile_No: "",
    email: "",
    gender: "",
    age_Type: "",
    totalFee: 0,
    doctor_Id: 0,
    isAdmitted: 0,
    address: {
     
      house_No: 0,
      society: "a",
      area: "a",
      city: "a",
      state: "a",
      dob: "2006-02-18T00:00:00",
    },
  });
  // console.log(patientData);
  useEffect(() => {
    if (patientData.isAdmitted == 1) {
      setBool(true);
    }
  }, [patientData.isAdmitted]);

  const passPatientData = () => {
    // props.editedPatientDataFunc(patientData);
    props.postData(patientData);
  };

  return (
    <div>
      <h3>CreatePatient</h3>

      <input
        placeholder="first_name"
        onChange={(e) =>
          setPatientData({ ...patientData, first_Name: e.target.value })
        }
      ></input>

      <input
        onChange={(e) =>
          setPatientData({ ...patientData, middle_Name: e.target.value })
        }
        placeholder="middle_name"
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, last_Name: e.target.value })
        }
        placeholder="last_name"
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, mobile_No: e.target.value })
        }
        placeholder="mobile No"
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, email: e.target.value })
        }
        placeholder="email"
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, gender: e.target.value })
        }
        placeholder="gender"
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, age_Type: e.target.value })
        }
        placeholder="age type"
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, totalFee: e.target.value })
        }
        placeholder="total fee"
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, doctor_Id: e.target.value })
        }
        placeholder="doctor Id"
      ></input>
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, isAdmitted: e.target.value })
        }
        placeholder="is Admitted"
      ></input>
      <button onClick={passPatientData}>Add Patient </button>
      {bool && <CreateIPDPatient></CreateIPDPatient>}

    </div>
  );
};
