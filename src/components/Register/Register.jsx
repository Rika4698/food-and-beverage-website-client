import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
             
          <div className=" bg-base-200">
  <div className="hero-content flex-col lg:flex">
    
    <div className="card  w-full max-w-sm lg:w-[500px] min-h-[500px] shadow-2xl bg-base-100">
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold text-blue-900">Registration Form</h1>
     <p className="mt-4">Enter your details to registration</p>
    </div>
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required name="name"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" placeholder="Photo URL" className="input input-bordered" required name="photo" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required name="email" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password"/>
         
        </div>
        {/* { errormessage && <p className="text-red-600 text-base text-center ">{errormessage}</p>}
        */}
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Registration</button>
        </div>
        <h3 className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-900 font-bold">Login</Link></h3>
        <button  className="  flex gap-4 bg-slate-200 rounded-full w-56 mx-10 my-4 outline hover:outline-4  outline-slate-100">
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


export default Register;