import { Link } from "react-router-dom";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
  } = useAuth();
  return (
    <>
      <section className="login">
        <Link to="/">
          <button className="back">Back to Home</button>
        </Link>
        <div className="loginContainer">
          <label className="authLabel">UserName</label>
          <input
            className="authInput"
            autoFocus
            type="text"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="errorMsg">{emailError}</p>
          <label className="authLabel">Password</label>
          <input
            className="authInput"
            autoFocus
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {!hasAccount ? (
            <>
              <p className="errorMsg">{passwordError}</p>
              <label className="authLabel">Confirm password</label>
              <input
                className="authInput"
                autoFocus
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </>
          ) : null}
          <p className="errorMsg">{confirmPasswordError}</p>

          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="authButton" onClick={handleLogin}>
                  Sign In
                </button>
                <p className="authP">
                  Don't have an account?
                  <span
                    className="authSpan"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                {password === confirmPassword ? (
                  <>
                    <button className="authButton" onClick={handleSignUp}>
                      Sign up
                    </button>
                    <p className="authP">
                      Have an account?
                      <span
                        className="authSpan"
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        Sign in
                      </span>
                    </p>
                  </>
                ) : (
                  <p className="authP">Password does not match</p>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
