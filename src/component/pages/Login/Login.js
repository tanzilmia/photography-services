import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
    <div className='md:w-3/12 sm:w-10/12 w-10/12 lg:w-3/12  mt-9 m-auto'>
      <div className="card flex-shrink-0 shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className='text-2xl text-center'>Login Now</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email'  placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to = '/signin' href="#" className="label-text-alt link link-hover">New To This Site ? Sign In Now  </Link>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
    </div>

    );
};

export default Login;