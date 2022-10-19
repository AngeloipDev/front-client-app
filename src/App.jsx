import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ResetPassword } from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import { Categories } from "./pages/Categories";

function App() {
  return (
    <>
      <ToastContainer pauseOnFocusLoss={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
