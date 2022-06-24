import React from 'react';
import {
  Link
} from "react-router-dom";


const Login = () => {
  return (
<div className='container mt-5'>
<h1 className='text-center text-white bg-info mb-3'>Login Up Form</h1>
  <form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" placeholder="Enter email"/>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" placeholder="Enter Password"/>
    </div>
    <div className='mt-3 text-center'>
    <Link to="/dashboard"> 
    <button type="button" className="btn btn-info btn-lg">Login</button>
    </Link>
    </div>
  </form>
  <hr/>
  <div className='mt-3 text-center'>
    <h6 className='mb-3'>Not registered yet, Register now</h6>
    <Link to="/register"> 
    <button type="button"  className="btn btn-info btn-lg">Register</button>
    </Link>
    </div>
</div>
  )
}

export default Login;
