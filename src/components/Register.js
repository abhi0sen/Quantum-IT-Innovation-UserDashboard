import React, {useState} from "react";
import "./style.css";
import user from "./Images/user.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [date, setDate] = useState(null)
  const [errMsg, setErrMsg] = useState("");


  const handleRegistraion = () => {
    if (uName == "") {
      setErrMsg("Please enter the username");
    } else if (password == "") {
      setErrMsg("Please enter the Password");
    } else if (password.length < 6) {
      setErrMsg("Your password is too short");
    }  else if(date == ""){
      setErrMsg("Please Enter your Date of Birth")
    }
    else {
      setErrMsg("");

        const userData = {
        username: uName,
        email: mail,
        date: date,
        password: password,
      }
      
      console.log(userData)

      axios.post('http://localhost:5000/user/add', userData)
      .then(res => {
        console.log(res.data)
        window.location.href = "/login"
      }
      )
      .catch(err => console.log(err))

      
    }
  };

  return (
    <div className="background">
      <div className="centered-div">
        <div className="title text-center">
          <span>Register</span>
        </div>
        <div className="text-center RegisterImg my-4" alt="User Register">
          <img src={user} />
        </div>

        <div>
          <form onSubmit={(event)=> event.preventDefault()}>
            <div className="d-flex">
              <i className="fa-solid fa-user text-secondary align-self-center me-2"></i>
              <input
                className="form-control-sm w-100 my-1 inputStyle"
                type="text"
                placeholder="username"
                onChange={(text)=>{setUName(text.target.value)}}
              />
            </div>

            <div className="d-flex">
  <i className="fa-solid fa-calendar-days text-secondary align-self-center me-2"></i>
  <input
    className="form-control-sm w-100 my-1 inputStyle"
    type="date"
    placeholder="DOB"
    onChange={(text)=>{setDate(text.target.value)}}
  />
</div>

            <div className="d-flex">
              <i className="fa-solid fa-envelope text-secondary align-self-center me-2"></i>
              <input
                className="form-control-sm w-100 my-1 inputStyle"
                type="email"
                placeholder="Email"
                onChange={(text)=>{setMail(text.target.value)}}
              />
            </div>

            <div className="d-flex">
              <i className="fa-solid fa-lock text-secondary align-self-center me-2"></i>
              <input
                className="form-control-sm w-100 my-1 inputStyle"
                type="password"
                placeholder="password"
                onChange={(text)=>{setPassword(text.target.value)}}
              />
            </div>
            <div className="text-danger my-1">
              {errMsg}
            </div>

            <div className="resp-flex">
              <div className="d-flex align-self-start">
                <input type="checkbox" />
                <span className="text-info text-sm ms-1 me-5">Remember me</span> 
              </div>
              <div className="text-sm align-self-center resp-text-end">
                <Link className="text-info text-decoration-none"  to="/">Forgot your password?</Link> <br />
                <Link className="text-info text-decoration-none"   to="/login">Login your account?</Link>
              </div>
            </div>

            <div>
              <button onClick={()=>{handleRegistraion()}} className="btn btn-info w-100 mt-4">Register</button> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
