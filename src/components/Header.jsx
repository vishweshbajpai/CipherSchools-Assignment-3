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
        <Link
          to={"/CipherSchools-Assignment-3/landing-page"}
          className={classes.logo}
        >
          <h1>Recipes</h1>
        </Link>
        <ul className={classes.navList}>
          {!recipeCxt.isLoggedIn && (
            <Link
              to={"/CipherSchools-Assignment-3"}
              className={classes.navListWrap}
            >
              <li>Login</li>
            </Link>
          )}
          {recipeCxt.isLoggedIn && (
            <>
              <Link
                to={"/CipherSchools-Assignment-3/all-recipes"}
                className={classes.navListWrap}
              >
                <li>All Recipes</li>
              </Link>
              <Link
                to={"/CipherSchools-Assignment-3/add-recipe"}
                className={classes.navListWrap}
              >
                <li>Add Recipe</li>
              </Link>
              <Link
                to={"/CipherSchools-Assignment-3"}
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
