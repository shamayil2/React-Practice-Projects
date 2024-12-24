import Header from '../components/Header';
import Footer from '../components/Footer';
import { employees } from './Employees';

const Report = () => {
  const mostWorked = employees.reduce((acc, curr) =>
    curr.hoursWorked > acc.hoursWorked ? curr : acc
  );
  const highestRated = employees.reduce((acc, curr) =>
    curr.performanceRate > acc.performanceRate ? curr : acc
  );
  const totalHours = employees.reduce(
    (acc, curr) => acc + curr.overTimeHours,
    0
  );
  console.log(totalHours);
  return (
    <>
      <Header />
      <main className="container py-2">
        <h2 className=" py-2">HR Report</h2>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h2>Most Worked Employee</h2>
            <p>Name: {mostWorked.name}</p>
            <p>Hours Worked: {mostWorked.hoursWorked}</p>
          </div>
          <div className="col-md-4">
            <h2>Highest Rated Employee</h2>
            <p>Name: {highestRated.name}</p>
            <p>Peformance Rate: {highestRated.hoursWorked}</p>
          </div>
          <div className="col-md-4">
            <h2>Total Overtime Hours</h2>

            <p>Total Overtime Hours: {totalHours}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Report;
