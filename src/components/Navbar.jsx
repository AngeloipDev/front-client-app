import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Navbar.module.css";
import { UserDropdown } from "./UserDropdown";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { Search } from "./Search";
import { Modal } from "./Modal";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

export const Navbar = () => {
  const [show, setShow] = useState(false);
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
            <li>
              <button onClick={() => setShow(true)}>Modal 1</button>
              <Modal show={show} onHide={() => setShow(false)}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalTitle}>Modal 1</span>
                  <button onClick={() => setShow(false)}>
                    <GrClose />
                  </button>
                </div>
                <div className={styles.modalBody}>Este es mi modal 1</div>
              </Modal>
            </li>

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
