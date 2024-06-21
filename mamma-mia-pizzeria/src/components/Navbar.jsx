import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-brand">&#127829; Pizzeria Mamma Mia!</div>
      <Link to="/">Home</Link>
      <Link to="/carrito">Cart</Link>
    </nav>
  );
};

export default Navbar;

