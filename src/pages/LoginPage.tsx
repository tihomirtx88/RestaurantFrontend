import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

function LoginPage(){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>()   

    const auth = useAuth()
    const navigate = useNavigate()

    const onsubmit = async (data:FormData) =>{
      try {
        const res = await login(data.email, data.password);

        auth.login(res.access_token);

        navigate("/"); 

      } catch (error) {
        toast.error("Invalid credentials");
        console.log(error);
        
      }
    }

    return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onsubmit)}>
             <input
          className="form-control my-2"
          placeholder="Email"
          {...register("email", { required: "Email required" })}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}

        <input
          type="password"
          className="form-control my-2"
          placeholder="Password"
          {...register("password", { required: "Password required" })}
        />
        {errors.password && <p className="text-danger">{errors.password.message}</p>}

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
    
}

export default LoginPage;