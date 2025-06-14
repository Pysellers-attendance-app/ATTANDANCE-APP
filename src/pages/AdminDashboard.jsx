import React, { useState } from "react";
import "./AdminDashboard.css";

const navItems = [
  "Employee History",
  "Pending Leaves",
  "Checkin/Checkout",
  "Working Days",
  "Payslip Upload",
  "Leave Approvals"
];

const AdminDashboard = () => {
  const [active, setActive] = useState("Employee History");
  const [darkMode, setDarkMode] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const employeeData = [
    { name: "John Doe", phone: "9876543210", joined: "2023-01-01", pendingLeave: 2 },
    { name: "Jane Smith", phone: "9123456780", joined: "2023-03-15", pendingLeave: 1 }
  ];

  const renderContent = () => {
    switch (active) {
      case "Employee History":
        return (
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Joined Date</th>
                <th>Pending Leaves</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((emp, idx) => (
                <tr key={idx}>
                  <td>{emp.name}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.joined}</td>
                  <td>{emp.pendingLeave}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "Pending Leaves":
        return <p>Approve or reject employee leave requests here...</p>;
      case "Checkin/Checkout":
        return <p>Track daily check-in and check-out times for each employee...</p>;
      case "Working Days":
        return <p>Calculate working days based on join date and attendance...</p>;
      case "Payslip Upload":
        return (
          <div>
            <p>Upload salary payslips for employees:</p>
            <input
              type="file"
              onChange={(e) => setUploadedFile(e.target.files[0])}
            />
            {uploadedFile && <p>Selected file: {uploadedFile.name}</p>}
          </div>
        );
      case "Leave Approvals":
        return <p>Manage and approve employee leave applications...</p>;
      default:
        return <p>Welcome to the Admin Dashboard!</p>;
    }
  };

  return (
    <div className={`admin-dashboard ${darkMode ? "dark" : ""}`}>
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <img src="/assets/pylogo.jpeg" alt="Admin" className="admin-avatar" />
          <div>
            <h2 className="admin-name">Admin</h2>
            <p className="admin-role">Dashboard</p>
          </div>
        </div>
        <nav className="admin-nav">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`admin-nav-button ${active === item ? "active" : ""}`}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="dark-toggle">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            Dark Mode
          </label>
        </div>
      </aside>
      <main className="admin-main">
        <h1 className="admin-title">{active}</h1>
        <div className="admin-content">{renderContent()}</div>
      </main>
    </div>
  );
};

export default AdminDashboard;
