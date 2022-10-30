import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`SamplePage`}>Sample Page</Link>
          </li>
          <li>Route 2</li>
          <li>Route 3</li>
          <li>Route 4</li>
          <li>Route 5</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
