import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Navbar.module.css";
import { UserDropdown } from "./UserDropdown";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { Search } from "./Search";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.subNavbarContainer}>
        <div className={styles.logo}>
          <Link to="/">Logo</Link>
        </div>

        <div className={styles.searchProductBox}>
          <Search />
        </div>

        <div className={styles.options}>
          <ul className={styles.ul}>
            <Link to="/categorias">
              <li className={`${styles.li} ${styles.liNav}`}>
                <AiOutlineBars size={20} className={styles.liIcon} />
                <span>Categorías</span>
              </li>
            </Link>

            <li className={`${styles.li} ${styles.liNav}`}>
              <FaShoppingCart size={20} className={styles.liIcon} />
              <span>Mi carrito</span>
            </li>
            <li className={styles.li}>
              {isLoggedIn ? (
                <UserDropdown />
              ) : (
                <Link to="/login" className={styles.loginBtn}>
                  Iniciar Sesión
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
