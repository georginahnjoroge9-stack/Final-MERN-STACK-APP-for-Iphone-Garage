import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="navbar">
      {/* LOGO */}
      <h2 className="logo"> iPhone Garage</h2>

      {/* NAV LINKS */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Repairs</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">🛒 Cart</Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        {user ? (
          <span className="user-name">{user.name}</span>
        ) : (
          <Link to="/login">Login</Link>
        )}

        {user?.isAdmin && (
          <Link to="/admin" className="admin-btn">
            Admin
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
