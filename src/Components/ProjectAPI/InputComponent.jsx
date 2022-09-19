import React from "react";

const InputComponent = (props) => {
    const passPatientData = () => {
        // props.editedPatientDataFunc(patientData);
        props.postData(props.patientData);
      };
  return (
    <div>
      
      {Object.keys(props.patientData).map((header, index) => (
        <>
          <label>{header}</label> &nbsp;&nbsp;
          <input
            key={index}
           
            onChange={(e) =>
              props.setPatientData({
                ...props.patientData,
                [header]: e.target.value,
              })
            }
          ></input>
          <br/>
           
        </>
      ))}
      <button onClick={passPatientData}>Admit this patient</button>
    </div>
  );
};

export default InputComponent;
