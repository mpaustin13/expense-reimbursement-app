import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const AllRRComponent: React.FC = ()=> {

    const [rr, setRR] = useState([]);
    const [idToActOn, setIdToActOn] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdToActOn(e.target.value);
    }

    const approveRR = () => {
        Axios.get('http://localhost:8080/project1mpa/api/viewallrrs', {
            params: {
                action: 'approve',
                id: idToActOn,
                manId: localStorage.getItem("id")
            }
        }).then((response) => {
            setIdToActOn('');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const denyRR = () => {
        Axios.get('http://localhost:8080/project1mpa/api/viewallrrs', {
            params: {
                action: 'deny',
                id: idToActOn,
                manId: localStorage.getItem("id")
            }
        })
        .then((response) => {
            setIdToActOn('');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        Axios.get('http://localhost:8080/project1mpa/api/viewallrrs', {
            params: {
                action: 'get'
            }
        })
        .then((response) => {
            setRR(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[]);

    return(

        <React.Fragment>

            <div></div>
            <label htmlFor="approve-deny-input">
                <input type="text"
                    placeholder="Request ID"
                    onChange={(e) => {handleInputChange(e)}}
                    value={idToActOn}/>
            </label>
            <button onClick={() => {approveRR()}}>Approve</button>
            <button onClick={() => {denyRR()}}>Deny</button>
            <div></div>

                <BootstrapTable data={rr}>
                    <TableHeaderColumn isKey className="table-header-id" dataField="id">ID</TableHeaderColumn>
                    <TableHeaderColumn className="table-header-date" dataField="date">Date</TableHeaderColumn>
                    <TableHeaderColumn dataField="amount">Amount</TableHeaderColumn>
                    <TableHeaderColumn dataField="info">Info</TableHeaderColumn>
                    <TableHeaderColumn dataField="empID">Employee ID</TableHeaderColumn>
                </BootstrapTable>

        </React.Fragment>
            
    );
}

export default AllRRComponent;