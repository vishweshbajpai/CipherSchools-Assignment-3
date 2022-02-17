import React, { useContext } from "react";
import RecipeContext from "../store/context";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  const { isLoggedIn } = useContext(RecipeContext);

  return (
    <div className={classes["main"]}>
      {isLoggedIn ? (
        <h1>Welcome to Recipes App</h1>
      ) : (
        <h1 className={classes.error}>Please login to access this page!</h1>
      )}
    </div>
  );
};

export default LandingPage;
