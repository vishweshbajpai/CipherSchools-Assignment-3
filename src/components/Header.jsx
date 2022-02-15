import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RecipeContext from "../store/context";
import classes from "./Header.module.css";

const Header = () => {
  const recipeCxt = useContext(RecipeContext);

  const logoutHandler = () => {
    recipeCxt.setIsLoggedIn();
  };
  return (
    <>
      <div className={classes["wrapper"]}>
        <Link to={"/"} className={classes.logo}>
          <h1>Recipes</h1>
        </Link>
        <ul className={classes.navList}>
          {!recipeCxt.isLoggedIn && (
            <Link to={"login"} className={classes.navListWrap}>
              <li>Login</li>
            </Link>
          )}
          {recipeCxt.isLoggedIn && (
            <>
              <Link to={"all-recipes"} className={classes.navListWrap}>
                <li>All Recipes</li>
              </Link>
              <Link to={"add-recipe"} className={classes.navListWrap}>
                <li>Add Recipe</li>
              </Link>
              <Link
                to={"/"}
                className={classes.navListWrap}
                onClick={logoutHandler}
              >
                <li>Logout</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
