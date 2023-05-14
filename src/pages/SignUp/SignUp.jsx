import { Link } from 'react-router-dom';
import loginLogo from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
  console.log(createUser)
  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value ;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)
    createUser(email,password)
    .then(result=>{
      const newUser = result.user;
      console.log(newUser)
    }).catch(error=>{
      console.log(error.message)
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left w-1/2 md:mr-[120px] ">
          
          <img src={loginLogo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-2xl text-center font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name ="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className='mx-auto my-4 text-sm'>Already Have An Account ? <Link className='text-red-500' to="/login">Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;