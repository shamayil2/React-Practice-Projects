import Header from '../components/Header';
import Footer from '../components/Footer';
import { employees } from './Employees';
import { useParams } from 'react-router-dom';
const EmployeeDetails = () => {
  console.log(employees);
  const employeeId = useParams();
  const employee = employees.find(
    (employee) => employee.id == employeeId.pageId
  );
  return (
    <>
      <Header />
      <main className="container py-4">
        <h2>{employee.name}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Name: </b> {employee.name}{' '}
          </li>
          <li className="list-group-item">
            <b>Designation: </b>
            {employee.title}{' '}
          </li>
          <li className="list-group-item">
            <b>Department: {employee.department}</b>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default EmployeeDetails;
