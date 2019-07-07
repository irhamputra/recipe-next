import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import "semantic-ui-css/semantic.min.css";

import Head from "../components/head";
import FormSearch from "../components/form";
import Layout from "../components/layout";
import CardRecipe from "../components/cards";

import { API_KEY } from "../config";

const Home = ({ initRecipe }) => {
  const [recipes, setRecipes] = useState(initRecipe);

  useEffect(() => {
    const recipe = JSON.stringify(recipes);
    localStorage.setItem("recipes", recipe);
  }, [recipes]);

  const getRecipe = async e => {
    e.preventDefault();

    const recipeName = e.target.elements.search.value;
    const cors = "https://cors-anywhere.herokuapp.com/";
    const res = await fetch(
      `${cors}https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`
    );
    const data = await res.json();

    setRecipes(data.recipes);
  };

  return (
    <Layout>
      <Head title="OpenTechCafetaria Leipzig" />

      <FormSearch getRecipe={getRecipe} />

      {recipes ? <CardRecipe recipes={recipes} /> : <div>No Recipe found</div>}
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(
    `https://www.food2fork.com/api/search?key=${API_KEY}`
  );
  const data = await res.json();

  return {
    initRecipe: data.recipes
  };
};

export default Home;
