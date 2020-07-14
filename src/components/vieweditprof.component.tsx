import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const ViewEditProfComponent: React.FC = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const id = localStorage.getItem("id");

    const [resetPassword, setResetPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState(false);

    const [newPassword, setNewPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const [emp, setEmp] = useState([]);

    const [successfulEmail, setSuccessfulEmail] = useState(false);
    const [successfulPassword, setSuccessfulPassword] = useState(false);

    // conditional rendering of "SUCCESS!!!"

    const showUpdatePassword = () => {
        setResetPassword(true);
        setResetEmail(false);
    }

    const showUpdateEmail = () => {
        setResetPassword(false);
        setResetEmail(true);
    }

    const inputChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    }

    const inputChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value);
    }

    useEffect(() => {
        Axios.get('http://localhost:8080/project1mpa/api/vieweditprof', {
            params: {
                id: id
            }
        })
        .then((response) => {
            setEmp(response.data);

            console.log(response.data);

            setName(response.data.name);
            setEmail(response.data.email);

        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const updatePassword = (password: string) => {
        Axios.post('http://localhost:8080/project1mpa/api/vieweditprof',{
            id: localStorage.getItem("id"),
            password: password
        })
        .then((response) => {
            setNewPassword('');
            setSuccessfulPassword(true);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const updateEmail = (email: string) => {
        Axios.post('http://localhost:8080/project1mpa/api/vieweditprof', {
            id: localStorage.getItem("id"),
            email: email
        })
        .then((response) => {
            setEmail(newEmail);
            setNewEmail('');
            setSuccessfulEmail(true);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return(
        <main>
            <h1>View/Edit Profile</h1>
            {
                successfulEmail ? <div className="success">Successfully reset email</div> : null
            }
            {
                successfulPassword ? <div className="success">Successfully reset password</div> : null
            }
            <div>
                <button onClick={() => showUpdatePassword()}>
                    Reset Password
                </button>
                <button onClick={() => showUpdateEmail()}>
                    Reset Email Address
                </button>
                <div>ID:&nbsp;{id}</div>
                <div>Name:&nbsp;{name}</div>
                <div>Email:&nbsp;{email}</div>
            </div>
            <div></div>
            {
                resetPassword ? 
                <div>
                    <label htmlFor="new-password">New Password:
                    <input type="text" required 
                    onChange={(e) => {inputChangePassword(e)}}
                    value={newPassword}
                    />
                    </label>
                    <button onClick={() => {updatePassword(newPassword)}}>Submit</button>
                </div>
                : null
            }
            {
                resetEmail ? 
                <div>
                    <label htmlFor="new-email">New Email:
                    <input type="text" required 
                    onChange={(e) => {inputChangeEmail(e)}}
                    value={newEmail}
                    />
                    </label>
                    <button onClick={() => {updateEmail(newEmail)}}>Submit</button>
                </div>
                : null
            }
        </main>
    );
}

export default ViewEditProfComponent;