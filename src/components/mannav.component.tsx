import { Link } from "react-router-dom"
import React from "react"

const ManNavComponent: React.FC = () => {
    return(
    <nav className="nav-bar">
        <ul>
        <li><Link to="/manager/viewallrr">View Pending Reimbursement Requests</Link></li>
        <li><Link to="/manager/viewallresrr">View Resolved Reimbursement Requests</Link></li>
        <li><Link to="/manager/viewallemp">View Employees</Link></li>
        <li><Link to="/manager/regnewemp">Register New Employee</Link></li>
        <li><Link to="/">Logout</Link></li>
        </ul>
    </nav>
    )
}
export default ManNavComponent;