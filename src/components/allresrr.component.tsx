import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const AllResRRComponent: React.FC = () => {

    const [resRR, setResRR] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/project1mpa/api/viewallresrrs')
        .then((response) => {
            console.log(response.data);
            setResRR(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[]);

    return(

        <BootstrapTable data={resRR}>
            <TableHeaderColumn isKey dataField="id">ID</TableHeaderColumn>
            <TableHeaderColumn dataField="date">Date</TableHeaderColumn>
            <TableHeaderColumn dataField="amount">Amount</TableHeaderColumn>
            <TableHeaderColumn dataField="info">Info</TableHeaderColumn>
            <TableHeaderColumn dataField="empID">Employee ID</TableHeaderColumn>
            <TableHeaderColumn dataField="manID">Resolved By Manager ID</TableHeaderColumn>
        </BootstrapTable>
    );
}

export default AllResRRComponent;