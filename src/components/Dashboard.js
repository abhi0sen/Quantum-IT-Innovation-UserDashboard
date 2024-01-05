import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import axios from "axios";
import { isLogin, setCookie } from "../utils/auth";
import Navbar from './Navbar';


const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const ListUsers = async()=> {axios
    .get("http://localhost:5000/user/")
    .then((response) => {

      setUsers(response.data);
      console.log(users)
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });}
    
    useEffect(() => {
      const authenticate = async() => {
        const loggedIn = await isLogin()
        if (!loggedIn){
          window.location.replace("/login");
          } else{
        if(loggedIn.data.auth){
          setCookie("userId", loggedIn.data.data._id)
        } 
        else{
          window.location.href = "/login";
        }
      }
      }
      authenticate()
      ListUsers()
      }, [])


    return (
      <div>

      <Navbar />
    <div className='bodyStyle'>
      <table className='UserTable'>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody> 
            {users.map((item, index) => (
            <tr key={index}> 
                <td>{index + 1}</td> 
                <td>{item.username}</td>
                <td>{item.date.slice(0, 10)}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
            </tr>
            ))}
            </tbody>
      </table> 
    </div>

    </div>
    )
}

export default Dashboard
