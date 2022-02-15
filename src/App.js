import "./App.css";
import React, { useContext } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import RecipeContext, { RecipeProvider } from "./store/context";
import AllRecipes from "./pages/AllRecipes";
import AddRecipe from "./pages/AddRecipe";
import NotFound from "./pages/NotFound";

function App() {
  const recipeCxt = useContext(RecipeContext);
  return (
    <RecipeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          {/* {recipeCxt.isLoggedIn && (
            <>
              <Route path="/all-recipes" element={<AllRecipes />} />
              <Route path="/add-recipe" element={<AddRecipe />} />
            </>
          )} */}
          <Route path="/all-recipes" element={<AllRecipes />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </RecipeProvider>
  );
}

export default App;
