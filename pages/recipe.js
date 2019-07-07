import React, { useState } from "react";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import { API_KEY } from "../config";

const RecipePost = ({ recipePost }) => {
  const [recipe, setRecipe] = useState([recipePost]);
  console.log(recipe);

  const renderRecipePost = () =>
    recipe.map(res => <li key={res.recipe_id}>{res.title}</li>);
  return (
    <Layout>
      <h1>Single recipe post</h1>
      <ul>{renderRecipePost()}</ul>
    </Layout>
  );
};

RecipePost.getInitialProps = async ({ req }) => {
  const res = await fetch(
    `https://www.food2fork.com/api/get?key=${API_KEY}&rId=${req.params.id}`
  );
  const data = await res.json();
  return {
    recipePost: data.recipe
  };
};

export default withRouter(RecipePost);
