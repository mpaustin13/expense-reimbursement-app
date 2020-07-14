import React, { useState } from 'react';
import Axios from 'axios';

const NewEmployeeComponent: React.FC = () => {

  const [empName, setEmpName] = useState('');
  const [empEmail, setEmpEmail] = useState('');
  const [empId, setEmpId] = useState('');
  const [empPassword, setEmpPassword] = useState('');

  const handleEmpNameUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmpName = e.target.value;
    setEmpName(enteredEmpName);
  }

  const handleEmpEmailUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmpEmail = e.target.value;
    setEmpEmail(enteredEmpEmail);
  }

  const handleEmpIDUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmpId = e.target.value;
    setEmpId(enteredEmpId);
  }

  const handleEmpPasswordUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmpPassword = e.target.value;
    setEmpPassword(enteredEmpPassword);
  }

  const handleSubmit = (name: string, email: string, id: string, password: string) => {

    Axios.post('http://localhost:8080/project1mpa/api/regnewemp', {

      name: name,
      email: email,
      id: id,
      password: password

    }).then((response) => {

      setEmpName('');
      setEmpEmail('');
      setEmpId('');
      setEmpPassword('');

    }).catch((error) => {
      console.log(error);
    });
  }

  return(
      // Register New Employee (Manager)
      <section id="register-employee">
        <div className="panel">
          <div className="panel-title">Register New Employee</div>
          <div className="panel-content">
              <div className="form-group">
                <label htmlFor="employee-name">
                  Name:&nbsp;<input
                  type="text"
                  name="employee-name"
                  className="form-input"
                  placeholder=""
                  required
                  value={empName}
                  onChange={(e) => handleEmpNameUpdate(e)}
                  />  
                </label>
                <div></div>
                <label htmlFor="employee-email">
                  Email:&nbsp;
                  <input type="text"
                  name="employee-email"
                  className="form-input"
                  placeholder=""
                  required
                  value={empEmail}
                  onChange={(e) => handleEmpEmailUpdate(e)}
                  />
                </label>
                <div></div>
                <label htmlFor="employee-ID">
                  ID:&nbsp;
                  <input type="text"
                  name="employee-ID"
                  className="form-input"
                  placeholder="Create a numeric ID"
                  required
                  value={empId}
                  onChange={(e) => handleEmpIDUpdate(e)}
                  />
                </label>
                <div></div>
                <label htmlFor="employee-password">
                  Password:&nbsp;
                  <input type="password"
                  name="employee-password"
                  className="form-input"
                  placeholder=""
                  required
                  value={empPassword}
                  onChange={(e) => handleEmpPasswordUpdate(e)}
                  />
                </label>
                <div></div>
                <button 
                  id="new-emp-submit"
                  // disabled={inputInvalid(manID, manPassword)}
                  onClick={() => handleSubmit(empName, empEmail, empId, empPassword)}
                  >Submit
                </button>
              </div>
          </div>
        </div>
      </section>
  );
}

export default NewEmployeeComponent;