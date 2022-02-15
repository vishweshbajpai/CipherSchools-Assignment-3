import React, { createContext, useState } from "react";

const RecipeContext = React.createContext({
  isLoggedIn: false,
  recipes: [],
  addRecipe: (recipe) => {},
  setIsLoggedIn: () => {},
  deleteRecipe: (id) => {},
});

export const RecipeProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const setLoggedInHandler = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const addRecipeHandler = (recipe) => {
    const updatedRecipes = [...recipes, { ...recipe }];
    setRecipes(updatedRecipes);
  };

  const deleteRecipeHandler = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  const data = {
    isLoggedIn: isLoggedIn,
    recipes: recipes,
    addRecipe: addRecipeHandler,
    setIsLoggedIn: setLoggedInHandler,
    deleteRecipe: deleteRecipeHandler,
  };

  return (
    <RecipeContext.Provider value={data}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
