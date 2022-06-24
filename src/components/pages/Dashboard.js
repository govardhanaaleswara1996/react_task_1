import { useState,useEffect } from "react";import axios from 'axios';
import {Link} from "react-router-dom";

const Dashboard = () => {
    const[users,setUsers] = useState([]);
    const GetUsers = async text => {
        useEffect(()=>{
            const url =`http://localhost:3000/api/v1/users/`;
            fetch(url)
            .then(results => results.json())
            .then(data => {
                setUsers(data.users);
            })
            },[])
    }; 
    console.log(users);
    GetUsers();
  return (
    <div className="container">
        <h1 className="text-center">Dashboard</h1>
      <div className="row">
        <div className="col-md-2">
          {/* empty */}
        </div>
        <div className="col-md-8">
            <ul className="list-group">
            {users.map((user,i) => {
                return (
                    <li key={user.id} className="list-group-item p-3">
                        <p>UserName : {user.username}</p>
                        <p>Email : {user.email}</p>
                        <p>firstName : {user.firstName}</p>
                        <p>lastName : {user.lastName}</p>
                        <p>mobile : {user.mobile}</p>
                        <p>role : {user.role}</p>
                    </li>
                )
                })}  
            </ul>
        </div>
        <div className="col-md-2">
          {/* empty */}
        </div>
     </div>
     <div className="m-5 text-center">
     <Link to="/"> 
    <button type="button"  className="btn btn-info btn-lg">Return to login</button>
    </Link>
     </div>
    </div>
  )
}

export default Dashboard