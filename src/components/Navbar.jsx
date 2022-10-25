import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Navbar.module.css";
import { UserDropdown } from "./UserDropdown";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { Search } from "./Search";
import { useRef, useState } from "react";
import { CartModal } from "./CartModal";
import { LoginModal } from "./LoginModal";
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { isLoggedIn } = useAuth();
  const { cart } = useCart();
  const ref = useRef("");

  const handleAnimation = () => {
    ref.current.className = `${styles.cartContent} ${styles.animation}`;
    setTimeout(() => {
      ref.current.className = `${styles.cartContent}`;
    }, 1000);
  };
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

            <li
              className={`${styles.li} ${styles.liNav}`}
              onClick={() => setShow(true)}
            >
              <span ref={ref} className={styles.cartContent}>
                <FaShoppingCart size={20} className={styles.liIcon} />
                <span className={styles.item__total}>{cart.length}</span>
              </span>
              <span>Mi carrito</span>
            </li>
            <li>
              <button onClick={() => setShowLogin(true)}>LOGIN</button>
              <LoginModal show={showLogin} setShow={setShowLogin} />
            </li>
            <CartModal show={show} setShow={setShow} />
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
