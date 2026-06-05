import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Головна</Link> |{" "}
      <Link to="/students">Студенти</Link> |{" "}
      <Link to="/add-student">Додати</Link>
    </nav>
  );
}

export default Navigation;