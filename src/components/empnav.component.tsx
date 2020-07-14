import { Link } from "react-router-dom"
import React from "react"

const EmpNavComponent: React.FC = () => {
    return(
    <nav className="nav-bar">
        <ul>
          <li><Link to="/employee/srr">Submit New Reimbursement Request</Link></li>
          <li><Link to="/employee/viewrr">View Pending Reimbursement Requests</Link></li>
          <li><Link to="/employee/viewresrr">View Resolved Reimbursement Requests</Link></li>
          <li><Link to="/employee/vieweditprof">View/Edit Profile</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
    </nav>
    )
}
export default EmpNavComponent;