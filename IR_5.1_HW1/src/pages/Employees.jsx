import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const employees = [
  {
    id: '1',
    name: 'John Doe',
    title: 'Software Developer',
    department: 'IT',
    hoursWorked: 210,
    performanceRate: 0.79,
    overTimeHours: 60,
  },
  {
    id: '2',
    name: 'Jane Smith',
    title: 'Designer',
    department: 'Design',
    hoursWorked: 195,
    performanceRate: 0.95,
    overTimeHours: 45,
  },
  {
    id: '3',
    name: 'Bob Johnson',
    title: 'Project Manager',
    department: 'Management',
    hoursWorked: 170,
    performanceRate: 0.85,
    overTimeHours: 20,
  },
];

const Employees = () => {
  const [dept, setDept] = useState('All');
  const filteredEmployees =
    dept === 'All'
      ? employees
      : employees.filter((employee) => employee.department === dept);

  return (
    <>
      <Header />
      <main className="container pb-4">
        <h2 className="py-4">List of Employees</h2>
        <label htmlFor="deptSelect pt-4">Filter by Department:</label>
        <br />
        <select
          onChange={(event) => setDept(event.target.value)}
          className="form-select mb-4"
          id="deptSelect"
        >
          <option value="All">All Departments</option>
          <option value="IT">IT</option>
          <option value="Design">Design</option>
          <option value="Management">Management</option>
        </select>
        <ul className="list-group">
          {filteredEmployees.map((employee) => (
            <li className="list-group-item">
              <h5>{employee.name}</h5>
              <p>{employee.title}</p>
              <Link
                to={`/employees/${employee.id}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Employees;
