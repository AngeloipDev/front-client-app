import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/Login.module.css";
import { Input } from "../components/Input";
import { BiLeftArrowAlt } from "react-icons/bi";
import axios from "axios";
import { isEmpty, isLength, isMatch } from "../helpers/validate";
import { Toast } from "../helpers/toast";

const initialState = {
  password: "",
  confirmpassword: ""
};

export const ResetPassword = () => {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState(initialState);
  const { password, confirmpassword } = form;
  const ref = useRef(null);
  const navigate = useNavigate();
  const { token } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleReturn = () => {
    navigate("/", { replace: true });
  };

  const handleReset = () => {
    setForm(initialState);
    ref.current.reset();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(password) || isEmpty(confirmpassword)) {
      return Toast("error", "Complete todos los campos");
    }

    if (isLength(password)) {
      return Toast("error", "La contraseña debe tener al menos 6 caracteres");
    }

    if (!isMatch(password, confirmpassword)) {
      return Toast("error", "Las contraseñas no coinciden");
    }

    setIsLoading(true);
    await axios
      .post(
        "http://localhost:5000/api/user/auth/reset_pass",
        { password },
        {
          withCredentials: true,
          headers: {
            Authorization: token
          }
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
        <h2 className={styles.title}>Restablecer Contraseña</h2>
        <form ref={ref} className={styles.formulario} onSubmit={handleSubmit}>
          <Input
            type={visible ? "text" : "password"}
            text="Contraseña"
            name="password"
            icon={visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            onClick={handleVisible}
            onChange={handleChange}
          />
          <Input
            type={visible ? "text" : "password"}
            text="Confirmar Contraseña"
            name="confirmpassword"
            onClick={handleVisible}
            onChange={handleChange}
          />

          <button
            type="submit"
            className={styles.btnSubmitForm}
            disabled={isLoading}
          >
            {isLoading ? "Restableciendo..." : "Restablecer"}
          </button>

          <div className={styles.forgotPassword}>
            <button
              className={`${styles.btnForm} ${styles.buttonIsRegister} ${styles.backBtn}`}
              onClick={handleReturn}
            >
              <BiLeftArrowAlt size={25} />
              Ir al Inicio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
