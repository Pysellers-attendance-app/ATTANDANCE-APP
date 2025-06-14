import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './EmployerDashboard.css';

const navItems = [
  'Employee Details',
  'Joined Days',
  'Working Days',
  'Attendance',
  'Hours Tracking',
  'Leave Apply',
  'Payslip Download',
];

const COLORS = ['#8884d8', '#82ca9d'];
const data = [
  { name: 'Worked Hours', value: 160 },
  { name: 'Remaining', value: 40 },
];

const EmployerDashboard = () => {
  const [active, setActive] = useState('Employee Details');
  const [darkMode, setDarkMode] = useState(false);
  const pendingLeaves = 2;

  const renderContent = () => {
    switch (active) {
      case 'Employee Details':
        return <p>Show employee personal information here...</p>;
      case 'Joined Days':
        return <p>Show joining date and total days...</p>;
      case 'Working Days':
        return <p>Calculate and show working days...</p>;
      case 'Attendance':
        return <p>Check-in / Check-out UI goes here...</p>;
      case 'Hours Tracking':
        return (
          <div>
            <p>Monthly Hours Overview</p>
            <PieChart width={300} height={200}>
              <Pie
                data={data}
                cx={150}
                cy={100}
                innerRadius={40}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        );
      case 'Leave Apply':
        return <p>Form to apply or manage leaves...</p>;
      case 'Payslip Download':
        return <p>Downloadable payslip list...</p>;
      default:
        return <p>Welcome to the Employer Dashboard!</p>;
    }
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark' : ''}`}>
      <aside className="sidebar">
        <div className="profile">
          <img src="/assets/pylogo.jpeg" alt="Profile" className="avatar" />
          <div>
            <h2 className="username">Employer</h2>
            <p className="role">Dashboard</p>
          </div>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`nav-button ${active === item ? 'active' : ''}`}
            >
              {item}
              {item === 'Leave Apply' && pendingLeaves > 0 && (
                <span className="badge">{pendingLeaves}</span>
              )}
            </button>
          ))}
        </nav>

        <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle">
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </aside>

      <main className="main">
        <h1 className="title">{active}</h1>
        <div className="content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
