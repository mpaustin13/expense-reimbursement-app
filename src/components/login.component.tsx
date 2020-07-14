import React, { useState } from 'react';
import Axios from 'axios';

interface LoginProps {
    history: any;
}

const LoginComponent: React.FC<LoginProps> = (props) => {
    
    const [empID, setEmpID] = useState('');
    const [empPassword, setEmpPassword] = useState('');
    
    const [manID, setManID] = useState('');
    const [manPassword, setManPassword] = useState('');
    
    const [loginError, setLoginError] = useState(false);

    const handleEmpIDUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: negate non numeric characters from altering state
        const enteredID = e.target.value;
        setEmpID(enteredID);
    }

    const handleEmpPasswordUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const enteredPassword = e.target.value;
        setEmpPassword(enteredPassword);
    }

    const handleManIDUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: negate non numeric characters from altering state
        const enteredID = e.target.value;
        setManID(enteredID);
    } 

    const handleManPasswordUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const enteredPassword = e.target.value;
        setManPassword(enteredPassword);
    }

    const refreshInputs = () => {
        setEmpID('');
        setEmpPassword('');
        setManID('');
        setManPassword('');
    }

    const handleSubmit = (id: string, password: string, manager: boolean) => {
      
        Axios.interceptors.response.use((resp) => resp, (error) => setLoginError(true));

        Axios.post('http://localhost:8080/project1mpa/api/login', {

        credId: id,
        credPassword: password,
        isManager: manager

        }).then((response) => {

            console.log(response.status)
            console.log(response.data)

            localStorage.setItem('id',response.data.id);

            if(response.data.role === "manager") {
                props.history.push('/manager');
            } else if(response.data.role === "employee") {
                props.history.push('/employee');
            } else {
                console.log("response message not received")
            }

        }).catch((error) => {

            refreshInputs();
            alert('Invalid login credentials');
            props.history.push('/');
        });
    }

    const inputInvalid = (id: string, password: string) => {
        return (id == null || password == null);
        // TODO: figure out how to disable button unless proper input in both fields        
    }

    return(
        <div className="login-comp" >
            {/* Employee Login */}
            <section id="login-employee">
                <div className="panel">
                    <div className="panel-title">Log In as Employee</div>
                    <div className="panel-content">
                            {
                                loginError ? <div>Invalid Login</div> : null
                            }
                            <div className="form-group">
                                <label htmlFor="employee-ID">
                                    Employee ID:&nbsp;
                                    <input
                                    type="text"
                                    name="employee-ID"
                                    className="form-input"
                                    value={empID}
                                    placeholder=""
                                    required
                                    onChange={(e) => handleEmpIDUpdate(e)}
                                    />  
                                </label>
                                <div></div>
                                <label htmlFor="employee-password">
                                    Password:&nbsp;
                                    <input type="password"
                                    name="employee-password"
                                    className="form-input"
                                    value={empPassword}
                                    placeholder=""
                                    required
                                    onChange={(e) => handleEmpPasswordUpdate(e)}
                                    />
                                </label>
                                <button 
                                    className="login-submit"
                                    disabled={inputInvalid(empID, empPassword)}
                                    onClick={() => handleSubmit(empID, empPassword, false)}
                                >Submit
                                </button>
                            </div>
                    </div>
                </div>
            </section>

            {/* Manager Login */}
            <section id="login-manager">
                <div className="panel">
                    <div className="panel-title">Log In as Manager</div>
                    <div className="panel-content"> 
                            <div className="form-group">
                                <label htmlFor="manager-ID">
                                    Manager ID:&nbsp;<input
                                    type="text"
                                    name="manager-ID"
                                    className="form-input"
                                    value={manID}
                                    placeholder=""
                                    required
                                    onChange={(e) => handleManIDUpdate(e)}
                                    />  
                                </label>
                                <div></div>
                                <label htmlFor="manager-password">
                                    Password:&nbsp;
                                    <input type="password"
                                    name="manager-password"
                                    className="form-input"
                                    value={manPassword}
                                    placeholder=""
                                    required
                                    onChange={(e) => handleManPasswordUpdate(e)}
                                    />
                                </label>
                                <button 
                                    className="login-submit"
                                    disabled={inputInvalid(manID, manPassword)}
                                    onClick={() => handleSubmit(manID, manPassword, true)}
                                >
                                    Submit
                                </button>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginComponent;