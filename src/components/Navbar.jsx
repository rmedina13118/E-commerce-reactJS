import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/categories"}>Productos</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
