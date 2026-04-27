import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { toast } from "react-toastify";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = async() => {
        try {
            const res = await login(email, password);

            auth.login(res.access_token);
            toast("Success login")

            navigate("/");

        } catch (error) {
            toast("Wrong email or password")
            console.log(error);
            
            alert("Login falied")
        }
    };

    return (
    <div className="container mt-5">
      <h2>Login</h2>

      <input
        className="form-control my-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control my-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
    
}

export default LoginPage;