import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">DocuWell</Link>

        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#dwNav"
  aria-controls="dwNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

        <div id="dwNav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/symptoms">Symptoms Log</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/medications">Medications</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reports">Reports</NavLink>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
