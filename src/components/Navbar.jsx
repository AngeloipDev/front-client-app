import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Navbar.module.css";
import { UserDropdown } from "./UserDropdown";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import { Search } from "./Search";
import { useEffect, useRef, useState } from "react";
import { CartModal } from "./CartModal";
import { LoginModal } from "./LoginModal";
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const { isLoggedIn } = useAuth();
  const { cart } = useCart();
  const ref = useRef("");

  const handleAnimation = () => {
    ref.current.className = `${styles.cartContent} ${styles.animation}`;
    setTimeout(() => {
      ref.current.className = `${styles.cartContent}`;
    }, 1000);
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.subNavbarContainer}>
        <div className={styles.logo}>
          <Link to="/">Logo</Link>
        </div>

        {width > 800 && (
          <div className={`${styles.searchProductBox}`} style={{ flexGrow: 1 }}>
            <Search />
          </div>
        )}

        <div className={styles.options}>
          <ul className={styles.ul}>
            <li className={`${styles.li} ${styles.liNav} ${styles.liSearch}`}>
              <AiOutlineSearch size={20} className={styles.liIcon} />
            </li>
            <Link to="/categorias">
              <li className={`${styles.li} ${styles.liNav}`}>
                <AiOutlineBars size={20} className={styles.liIcon} />
                <span className={styles.liName}>Categorías</span>
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
            </li>
            <CartModal show={show} setShow={setShow} />

            {isLoggedIn ? (
              <li className={styles.li}>
                <UserDropdown />
              </li>
            ) : (
              <>
                <li
                  className={`${styles.li} ${styles.liNav}`}
                  onClick={() => setShowLogin(true)}
                >
                  <FaUser size={20} className={styles.liIcon} />
                  <span className={styles.liName}>Iniciar Sesión</span>
                </li>
                <LoginModal show={showLogin} setShow={setShowLogin} />
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
