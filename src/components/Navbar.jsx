import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const {cart} = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          Shop
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="collapsibleNavbar"
        >

           <div className="ms-auto d-flex gap-3">

          <Link to="#" className="text-white">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Link>

          <Link to="/cart" className="text-white">
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
             <span>{cart.length}</span>

          </Link>
        </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;