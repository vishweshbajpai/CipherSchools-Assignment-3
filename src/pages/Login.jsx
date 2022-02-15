import React, { useContext, useEffect } from "react";
import classes from "./Login.module.css";
import validator from "validator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "../store/context";

const Login = () => {
  const recipeCxt = useContext(RecipeContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState();
  const [isValidPassword, setIsValidPassword] = useState();

  const emailErrorMsg = "Enter a valid email!";
  const passwordErrorMsg = "Please enter atleast 6 characters.";

  const submitHandler = (e) => {
    e.preventDefault();

    if (validator.isEmail(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }

    if (password.trim().length < 6) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
  };

  useEffect(() => {
    console.log("effect running");
    if (isValidEmail && isValidPassword) {
      recipeCxt.setIsLoggedIn();
      navigate("/");
    }
  }, [isValidEmail, isValidPassword, recipeCxt, navigate]);

  // if (recipeCxt.isLoggedIn) {

  // }

  return (
    <div className={classes.main}>
      <form onSubmit={submitHandler} className={classes.card}>
        <h1>Login</h1>
        <input
          className={classes.email}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {isValidEmail === false && <p>{emailErrorMsg}</p>}
        <input
          className={classes.password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {isValidPassword === false && <p>{passwordErrorMsg}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
