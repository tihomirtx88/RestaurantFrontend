import { ToastContainer } from "react-toastify";

function ToastProvider() {
  return <ToastContainer position="top-right" autoClose={3000} />;
}

export default ToastProvider;