import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {loginUser,googleLogin,githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        loginUser(email,password)
        .then(() => {
            form.reset();
            navigate('/');
        })
        .catch(error => {
            console.log(error);
            Swal.fire({
                title: "Error Occured!",
                text: `${error.message}`,
                icon: "error"
              });
        })

    }
    return (
        <div className="mx-20">
            <form  className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>     
            </form>
            <p className="text-center">Don{`'`}t have an account? Please<Link className="text-blue-600" to="/login">Register</Link></p>
            <div className="flex flex-col justify-center items-center ">
                <button onClick={googleLogin} className="btn btn-primary w-full block mb-5">Continue With Google</button>
                <button onClick={githubLogin} className="btn btn-primary w-full block">Continue With Github</button>
            </div>
        </div>
    );
};

export default Login;