import React from 'react';
import {
  Link
} from "react-router-dom";

const Sign = () => {
  return (
    <div className='container mt-5'>
      <h1 className='text-center text-white bg-info mb-3'>Sign Up Form</h1>
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputName">Name</label>
        <input type="text" className="form-control" placeholder="Enter Name"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" placeholder="Enter email"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmployee ID">Employee ID</label>
        <input type="text" className="form-control" placeholder="Employee ID"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputMobile">Mobile no</label>
        <input type="text" className="form-control" placeholder="Enter Mobile no"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" placeholder="Enter Password"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2">Confirm Password</label>
        <input type="password" className="form-control" placeholder="Re enter Password"/>
      </div>
      <div className='mt-3 text-center'>
      <button type="submit" className="btn btn-info btn-lg">Sign Up</button>
      </div>
    </form>
    <hr/>
    <div className='mt-3 text-center'>
    <Link to="/"> 
    <button type="button"  className="btn btn-info btn-lg">Return to login</button>
    </Link>
    </div>
  </div>
  )
}

export default Sign;
