import React from "react";
import MyRecipes from "./MainContent/MyRecipes";
import Contact from "./MainContent/Contact";
import CreateRecipe from "./MainContent/CreateRecipe";
import Account from "./User/Account";
import CreateAccount from "./User/CreateAccount";
import MealPlanner from "./MainContent/MealPlanner";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

class MainContent extends React.Component {
  render() {
    return (
      <div className="MainContent">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="recipes" element={<MyRecipes something="Hi" />} />
            <Route path="recipes/create" element={<CreateRecipe />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<Account />} />
            <Route path="account" element={<MyRecipes something="account" />} />
            <Route path="account/create" element={<CreateAccount />} />
            <Route
              path="recipe/create"
              render={() => {
                return <Redirect to="recipes/create" />;
              }}
            />
            <Route path="plan" element={<MealPlanner />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default MainContent;
