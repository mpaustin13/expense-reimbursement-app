import React, { useState } from 'react';
import Axios from 'axios';

const SubmitRR: React.FC = () => {

  const [amount, setAmount] = useState('');
  const [info, setInfo] = useState('');

  const [successful, setSuccessful] = useState(false);

  const empId = localStorage.getItem("id");

  const handleAmountUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  }

  const handleInfoUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(e.target.value);
  }

  const handleSubmit = (amount: string, info: string) => {

    Axios.interceptors.response.use();

    Axios.post('http://localhost:8080/project1mpa/api/submitnewrr', {

      empID: localStorage.getItem('id'),
      amount: amount,
      info: info

    }).then((response) => {

      setAmount('');
      setInfo('');

      setSuccessful(true);

    }).catch((error) => {
      console.log(error);
      console.log(error.data);
    });
  }

    return(
        // Submit New Reimbursement Request (Employee)
        <section id="new-rr">
          <div className="panel">
            <div className="panel-title">Submit New Reimbursement Request</div>
            <div className="panel-content">
              {
                successful ? <div className="success">Successfully created new request</div> : null
              }
              <form method="POST">
                <div className="form-group">
                  <label htmlFor="rr-amount">
                    Reimbursement Amount:&nbsp;<input
                    type="number"
                    name="rr-amount"
                    className="form-input"
                    placeholder=""
                    required
                    value={amount}
                    onChange={(e) => {handleAmountUpdate(e)}}
                    />  
                  </label>
                  <div></div>
                  <label htmlFor="rr-info">
                    Info:&nbsp;
                    <input type="text"
                    name="rr-info"
                    className="form-input"
                    placeholder="Describe what is being reimbursed"
                    required
                    value={info}
                    onChange={(e) => {handleInfoUpdate(e)}}
                    />
                  </label>
                  <button 
                  id="new-rr-submit"
                  onClick={(e) => {handleSubmit(amount, info); e.preventDefault()}}
                  >Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </section>
    );
}

export default SubmitRR;