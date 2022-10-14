import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import styles from "../styles/Login.module.css";
import { Input } from "../components/Input";
import { BiLeftArrowAlt } from "react-icons/bi";
import axios from "axios";
import { isEmpty, isEmail } from "../helpers/validate";
import { Toast } from "../helpers/toast";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const ref = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = () => {
    setEmail("");
    ref.current.reset();
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(email)) {
      return Toast("error", "Por favor, ingrese su correo electrónico");
    }

    if (!isEmail(email)) {
      return Toast("error", "Ingrese un correo válido");
    }

    setIsLoading(true);
    await axios
      .post(
        "http://localhost:5000/api/user/auth/forgot_pass",
        { email },
        {
          withCredentials: true
        }
      )
      .then((res) => {
        handleReset();
        Toast("success", res.data.msg);
      })
      .catch((err) => Toast("error", err.response.data.msg));

    setIsLoading(false);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Recuperar Contraseña</h2>
        <form ref={ref} className={styles.formulario} onSubmit={handleSubmit}>
          <Input
            type="text"
            text="Correo electrónico"
            name="email"
            onChange={handleChange}
          />

          <button
            type="submit"
            className={styles.btnSubmitForm}
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </button>

          <div className={styles.forgotPassword}>
            <Link
              to="/login"
              className={`${styles.btnForm} ${styles.buttonForgotPass} ${styles.backBtn}`}
              onClick={handleReset}
            >
              <BiLeftArrowAlt size={25} />
              Iniciar Sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
