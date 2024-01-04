import React from "react";
import "./style.css";
import user from "./Images/user.png";

const Register = () => {
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
              />
            </div>

            <div class="d-flex">
  <i class="fa-solid fa-calendar-days text-secondary align-self-center me-2"></i>
  <input
    class="form-control-sm w-100 my-1 inputStyle"
    type="date"
    placeholder="DOB"
  />
</div>

            <div className="d-flex">
              <i className="fa-solid fa-envelope text-secondary align-self-center me-2"></i>
              <input
                className="form-control-sm w-100 my-1 inputStyle"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="d-flex">
              <i class="fa-solid fa-lock text-secondary align-self-center me-2"></i>
              <input
                className="form-control-sm w-100 my-1 inputStyle"
                type="password"
                placeholder="password"
              />
            </div>

            <div className="d-flex">
              <div className="d-flex">
                <input type="checkbox" />
                <span className="text-info text-sm me-5">Remember me</span>
              </div>
              <div className="text-info text-sm align-self-center text-end">
                Forgot your password?
              </div>
            </div>

            <div>
              <button className="btn btn-info w-100 mt-4">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
