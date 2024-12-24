import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <section>
          <img src="https://placehold.co/350?text=Employees+Smiling" alt="" />
        </section>
        <section className="py-4">
          <h3>Our Employees</h3>
          <p>
            Meet our dedicated team of professionals who work tirelessly to
            achieve our company's goals.
          </p>
          <Link to="/employees" className="btn btn-primary">
            View Employees
          </Link>
        </section>
        <section className="py-4">
          <h3>Company Report</h3>
          <p>
            Enjoy our latest financial report to gain insights into our
            company's performance and growth
          </p>
          <Link to="/report" className="btn btn-primary">
            View Report
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
