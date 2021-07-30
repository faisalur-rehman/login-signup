import React from "react";

const Login = () => {
  return (
    <div>
      <section className="login_section">
        <div className="login_container">
          <div className="login_form">
            <h3>Log In</h3>
            <form>
              <div className="login_fields">
                <div className="input_field">
                  <label>Email address</label>
                  <input type="email" placeholder="" />
                </div>
                <div className="input_field">
                  <label>Password</label>
                  <input type="password" placeholder="" />
                </div>
                <div className="submit_btn">
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
