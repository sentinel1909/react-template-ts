import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <section>
        <h1>
          <Link to="/">React Typescript Template</Link>
        </h1>
      </section>
    </header>
  );
}

export default Header;
