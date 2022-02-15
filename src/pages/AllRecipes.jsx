import classes from "./AllRecipes.module.css";
import React, { useContext } from "react";
import RecipeContext from "../store/context";

const AllRecipes = () => {
  const recipeCxt = useContext(RecipeContext);

  const deleteHandler = (id) => {
    recipeCxt.deleteRecipe(id);
  };
  return (
    <>
      <div className={classes.main}>
        <h1>Recipes</h1>
        {recipeCxt.recipes.length === 0 && (
          <p style={{ textAlign: "center" }}>No recipes added yet!</p>
        )}
        {recipeCxt.recipes.map((recipe) => (
          <div key={recipe.id} className={classes.card}>
            <p>
              <span className={classes.label}>Recipe Name: </span>
              {recipe.title}
            </p>
            <p>
              <span className={classes.label}>Description: </span>
              {recipe.body}
            </p>
            <div className={classes.deleteWrapper}>
              <p className={classes.label}>{recipe.date}</p>
              <button
                onClick={() => deleteHandler(recipe.id)}
                className={classes.delete}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllRecipes;
