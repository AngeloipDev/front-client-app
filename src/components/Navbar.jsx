import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Navbar.module.css";
import { UserDropdown } from "./UserDropdown";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { Search } from "./Search";
import { useEffect, useRef, useState } from "react";
import { CartModal } from "./CartModal";
import { LoginModal } from "./LoginModal";
import { useCart } from "../context/CartContext";
import { OffCanvasSearch } from "./OffCanvasSearch";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
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
      if (window.innerHeight > 800) {
        setShowCanvas(false);
      }
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
            <li
              className={`${styles.li} ${styles.liNav} ${styles.liSearch}`}
              onClick={() => setShowCanvas(true)}
            >
              <AiOutlineSearch size={20} className={styles.liIcon} />
            </li>
            <OffCanvasSearch show={showCanvas} setShow={setShowCanvas} />

            <Link to="/categorias">
              <li className={`${styles.li} ${styles.liNav}`}>
                <AiOutlineBars size={20} className={styles.liIcon} />
                <span className={styles.liName}>Categorías</span>
              </li>
            </Link>

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
                  <FaRegUser size={20} className={styles.liIcon} />
                  <span className={styles.liName}>Iniciar Sesión</span>
                </li>
                <LoginModal show={showLogin} setShow={setShowLogin} />
              </>
            )}

            <li
              className={`${styles.li} ${styles.liNav}`}
              onClick={() => setShow(true)}
            >
              <span ref={ref} className={styles.cartContent}>
                <BsCart3
                  strokeWidth={"0.3"}
                  size={20}
                  className={styles.liIcon}
                />
                <span className={styles.item__total}>{cart.length}</span>
              </span>
            </li>
            <CartModal show={show} setShow={setShow} />
          </ul>
        </div>
      </div>
    </nav>
  );
};
