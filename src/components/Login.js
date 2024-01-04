import React from "react";
import "./style.css";
import user from "./Images/user.png";

const Login = () => {
  return (
    <div className="background">
      <div className="centered-div">
        <div className="title text-center">
          <span>SIGN IN</span>
        </div>
        <div className="text-center loginImg my-4" alt="User Login">
          <img src={user} />
        </div>

        <div>
          <form>
            <div className="d-flex my-1 mb-3 border border-secondary ps-2">
              <i className="fa-solid fa-user text-secondary align-self-center me-2"></i>
              <input
                className="form-control-sm w-100 inputStyle"
                type="text"
                placeholder="username"
              />
            </div>

            <div className="d-flex my-1 border border-secondary ps-2">
              <i class="fa-solid fa-lock text-secondary align-self-center me-2"></i>
              <input
                className="form-control-sm w-100 inputStyle"
                type="password"
                placeholder="password"
              />
            </div>

            <div className="d-flex">
              <div className="d-flex">
                <input type="checkbox" />
                <span className="text-info text-sm ms-1 me-5">Remember me</span>
              </div>
              <div className="text-info text-sm align-self-center text-end">
                Forgot your password?
              </div>
            </div>

            <div>
              <button className="btn btn-info w-100 mt-4">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
