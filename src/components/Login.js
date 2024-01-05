import React, {useState} from "react";
import "./style.css";
import user from "./Images/user.png";
import { setAuthentication, getCookie } from "../utils/auth";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
    const [ errMsg, setErrMsg] = useState("")

    const handleLogin = () => {
        if(uName == ""){
            setErrMsg("Please enter the username")
        }
        else if (password == ""){
            setErrMsg("Please enter the Password")
        }
        else{
          const userData = {
            username: uName,
            password: password,
          };
          
          console.log(userData)
    
          axios.post('http://localhost:5000/api/login/', userData)
          .then((res) => {
            console.log("Login successful ")
            console.log(res.data.token)

            setAuthentication(res.data.token)
            setErrMsg("")
            window.location.href = "/"
          }
          )
          .catch(err => {console.log(err)
          setErrMsg("Invalid Credential")
          })
        }
      };

  return (
    <div className="background">
      <div className="centered-div">
        <div className="title text-center">
          <span className="text-dark">SIGN IN</span>
        </div>
        <div className="text-center loginImg my-4" alt="User Login">
          <img src={user} />
        </div>

        <div>
          <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className="d-flex my-1 mb-3 border border-secondary ps-2">
              <i className="fa-solid fa-user text-secondary align-self-center me-2"></i>
              <input
                className="form-control-sm w-100 inputStyle"
                type="text"
                placeholder="username"
                onChange={(text) => {setUName(text.target.value)}}
              />
            </div>

            <div className="d-flex my-1 border border-secondary ps-2">
              <i className="fa-solid fa-lock text-secondary align-self-center me-2"></i>
              <input
                className="form-control-sm w-100 inputStyle"
                type="password"
                placeholder="password"
                onChange={(text) => {setPassword(text.target.value)}}
              />
            </div>

            <div className="resp-flex">
              <div className="d-flex align-self-start">
                <input type="checkbox" />
                <span className="text-info text-sm ms-1 me-5">Remember me</span> 
              </div>
              <div className="text-sm align-self-center resp-text-end">
                <Link className="text-info text-decoration-none"  to="#">Forgot your password?</Link> <br />
                <Link className="text-info text-decoration-none"   to="/register">Register your account?</Link>
              </div>
            </div>

            <div>
              <button onClick={()=>{handleLogin()}} className="btn btn-info w-100 mt-4">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
