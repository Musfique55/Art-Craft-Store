import { useContext, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser,updateUser,logOut} = useContext(AuthContext);
    const [show,setShow] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.imgurl.value;
        const password = form.password.value;

        if(password.length < 6) {
            return Swal.fire({
                title: "Error Occured!",
                text: 'Password must be 6 characters or more',
                icon: "error"
              });
        }
        if(!/^(?=.*[a-z]).+$/.test(password)){
            return Swal.fire({
                title: "Error Occured!",
                text: 'Must be an Lowercase letter in the password',
                icon: "error"
              });
        }
        
        if(!/^(?=.*[A-Z]).+$/.test(password)){
            return Swal.fire({
                title: "Error Occured!",
                text: 'Must have an Uppercase letter in the password',
                icon: "error"
              });
        }

        createUser(email,password)
        .then(() => {
            Swal.fire({
                title: "Success!",
                text: 'You have successfully registered',
                icon: "success"
              });
            updateUser(name,photo)
            .then(() => {
                logOut();
                navigate('/logout');
            })
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
            <div className="hero my-12">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered"  required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" name="imgurl" placeholder="Image Url" className="input input-bordered"  required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                            <input type={show ? 'text' : "password"} name="password" placeholder="password" className="input w-full input-bordered" required/>
                            <span onClick={() => setShow(!show)} className="absolute top-4 right-3">
                                {
                                    show ? 
                                    <IoMdEyeOff className="text-lg"></IoMdEyeOff> : 
                                    <IoEye className="text-lg"></IoEye>
                                }
                            </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    <p>Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;