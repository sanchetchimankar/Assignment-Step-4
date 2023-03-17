import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';

const Login = () => {
  // States for registration

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

 

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'sanchet123@gmail.com' || password === '1234') {
      // alert("successfully logged in!!");
      navigate("/dashboard")

    } else {

      // alert("Wrong Email or Password ");
      setError("Invalid login or password");

    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        {/* <h1>Please enter all the fields</h1> */}
      </div>
    );
  };

  return (
    <div className="form" >
      <div>

        <h4 >USER LOGIN</h4>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>



      <form>

        <div class="form-outline mb-4">
          <input type="email" class="form-control" input onChange={handleEmail} className="input"
            value={email} />
          <label class="form-label" for="form2Example1">Email </label>
        </div>


        <div class="form-outline mb-4">
          <input type="password" class="form-control"  input onChange={handlePassword} className="input"
            value={password} />
          <label class="form-label" for="form2Example2">Password</label>
          {error && <div className="error">{error}</div>}
        </div>


        <div class="row mb-4">



        </div>


        <button type="submit" onClick={handleSubmit} class="btn btn-primary btn-block mb-4">Sign in</button>



      </form>

      {/* -------------------------------------------------------------------------------- */}

      {/* 
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" >
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3"></i>
                    <span class="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" >Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" input onChange={handleEmail} className="input"
          value={email} />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27"  input onChange={handlePassword} className="input"
          value={password}>Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="submit" onClick={handleSubmit}>Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2">Don't have an account? <a href="#!"
                    >Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}


    </div>
  );
};

export default Login;
