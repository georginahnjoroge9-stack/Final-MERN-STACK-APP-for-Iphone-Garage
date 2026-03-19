import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user } = useAuth();

  return (
    <nav className="navbar container">
      <div className="logo"> iPhone Garage</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>

      {user ? <span>{user.name}</span> : <Link to="/login">Login</Link>}
    </nav>
  );
};

export default Navbar;
