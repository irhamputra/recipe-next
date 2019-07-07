import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import "semantic-ui-css/semantic.min.css";
import { Card, Container, Grid, Image } from "semantic-ui-react";

import Head from "../components/head";
import FormSearch from "../components/form";
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

  const renderList = () =>
    recipes.map(recipe => (
      <Grid.Column>
        <Card key={recipe.recipe_id}>
          <Image wrapped ui={false} src={recipe.image_url} alt={recipe.title} />
          <Card.Content>
            <Card.Header>{recipe.title}</Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    ));

  return (
    <Container>
      <Head title="Recipe-Next.js" />

      <header>
        <h1>Recipe | Next.js SSR</h1>
      </header>

      <FormSearch getRecipe={getRecipe} />
      <Grid columns={4}>
        <Grid.Row>{renderList()}</Grid.Row>
      </Grid>
    </Container>
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
