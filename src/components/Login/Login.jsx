/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import swal from "sweetalert";



const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {signIn} = useContext(AuthContext);
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleAccount = () => {
        googleSignIn().then ((result) => {
          swal({
            
            text: "Login done successfully",
            icon: "success",
            
          })
            console.log(result.user);
             navigate(location?.state?location.state :'/' )
        })
        
    };
    const[errormessage, setErrorMessage] =useState("");
    const handleLoginForm = e =>{
        e.preventDefault ();
        const form = new FormData(e.currentTarget);
       
        const email = form.get("email");
        const password = form.get("password");
        setErrorMessage("");
    
    if((email,password))
  {
    signIn(email,password)
    .then ((result) => {
        console.log(result.user);
        swal({
            
            text: "Login done successfully",
            icon: "success",
            
          })
          navigate(location?.state?location.state :'/' )
    })
    .catch((err) => {
        console.log(err);
        setErrorMessage("Email and Password does not match!");
        
     
        swal({
            
            text: "Invalied Login",
            icon: "warning",
            
          })
          
    });
    
  }
}

    return (
        <div>
            
           <div className="  dark:bg-slate-600 py-4 mt-32 lg:mt-36">
  <div className="hero-content ">
    
    <div className="card max-w-sm w-full  bg-slate-100 dark:bg-slate-300">
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold text-blue-900">Login Now</h1>
     <p className="mt-4">Enter your details to login</p>
    </div>
      <form onSubmit={handleLoginForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required name="email"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password"/>
         
        </div>
        <p className="text-red-500 text-base">{errormessage}</p>
       
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Login</button>
        </div>
        <h3 className="text-center mt-4">Do not have an account? <Link to="/register" className="text-blue-900 font-bold">Registration</Link></h3>
        <button onClick={handleGoogleAccount} className="  flex gap-4 bg-slate-200 rounded-full w-56 mx-10 my-4 outline hover:outline-4  outline-slate-100">
            <img className="rounded-full w-14 " src="https://i.ibb.co/41Gt5P3/178-1780776-googles-new-dataset-search-aims-to-assist-researchers.jpg" alt="" />
            <h3 className="mt-3 text-base">Sign in with Google </h3>
        </button>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;