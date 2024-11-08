import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import glogo from "../../public/google.png"
import gitlogo from "../../public/github.png"

const Login = () => {
    const {loginUser,googleLogin,githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
   const handleGoogle = () => {
    googleLogin()
    .then(() => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Logged In Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        navigate(location?.state ? location.state : ('/'));
      })
      .catch(error => {
          Swal.fire({
              title: "Error!",
              text: `${error.message}`,
              icon: "error"
            });
    })
   }


  const handleGithub = () => {
    githubLogin()
    .then(() => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Logged In Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        navigate(location?.state ? location.state : ('/'));
    })
    .catch(error => {
        Swal.fire({
            title: "Error Occured!",
            text: `${error.message}`,
            icon: "error"
          });
    })
  }


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email,password)
        .then(() => {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Logged In Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            form.reset();
            navigate(location?.state ? location.state : ('/'));
        })
        .catch(error => {
            Swal.fire({
                title: "Error Occured!",
                text: `${error.message}`,
                icon: "error"
              });
        })

    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-8">Login now!</h1>
            <div className="mx-auto card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                        <button className="bg-[#F52449] py-3 w-full text-white font-semibold rounded-lg">Login</button>
                        </div>     
            </form>
            <p className="text-center">Don{`'`}t have an account? <Link className="text-blue-600" to="/login">Register</Link></p>
            <div className="flex flex-col justify-center items-center my-5 px-8">
            <button onClick={handleGoogle} className="flex mb-5 font-semibold justify-center items-center gap-3 border text-[rgb(92,108,117)] font-base bg-white py-2 rounded-lg w-full"><img src={glogo} alt="" className="h-10 w-10" />Google</button>
            <button onClick={handleGithub} className="flex justify-center font-semibold items-center gap-3 border text-[rgb(92,108,117)] font-base bg-white py-2 rounded-lg w-full"><img src={gitlogo} alt="" className="h-10 w-10"  />Github</button>
            </div>
        </div>
        </div>
    );
};

export default Login;