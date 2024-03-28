import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <header className="header">
         <nav className="nav container">

            <Link className="nav__logo" to="/"><h4>Modesto</h4></Link>

            <div className="nav__menu show-menu">
               <ul className="nav__list">
                  <li className="nav__item">
                     <Link className="nav__link active-link" to="/">
                        <i className="uil uil-home nav__icon"></i>
                        <span className="nav__text">Home</span>
                     </Link>
                  </li>

                  <li className="nav__item">
                     <Link className="nav__link" to="/search">
                        <i className="uil uil-search nav__icon"></i>
                        <span className="nav__text">Pesquisar</span>
                     </Link>
                  </li>

                  <li className="nav__item">
                     <Link className="nav__link" to="/login">
                     <i className="uil uil-user nav__icon"></i>
                     <span className="nav__text">Login</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   )
}

export default Navbar;