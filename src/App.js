import "./App.css";
import React, { useContext } from "react";
import Layout from "./components/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import RecipeContext from "./store/context";
import AllRecipes from "./pages/AllRecipes";
import AddRecipe from "./pages/AddRecipe";
import NotFound from "./pages/NotFound";

function App() {
  const recipeCxt = useContext(RecipeContext);
  console.log(recipeCxt.isLoggedIn, "App");
  return (
    <Layout>
      <Routes>
        <Route path="/CipherSchools-Assignment-3" element={<Login />} />
        <Route
          path="/CipherSchools-Assignment-3/landing-page"
          element={<LandingPage />}
        />
        {recipeCxt.isLoggedIn && (
          <>
            <Route
              path="/CipherSchools-Assignment-3/all-recipes"
              element={<AllRecipes />}
            />
            <Route
              path="/CipherSchools-Assignment-3/add-recipe"
              element={<AddRecipe />}
            />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
