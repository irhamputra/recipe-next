import React from "react";
import Link from 'next/link'
import { Card, Grid, Image } from "semantic-ui-react";

const CardRecipe = ({ recipes }) => {
  const renderList = () =>
    recipes.map(recipe => (
      <Grid.Column key={recipe.recipe_id}>
        <Card>
          <Image wrapped ui={false} src={recipe.image_url} alt={recipe.title} />
          <Card.Content>
            <Card.Header>{recipe.title}</Card.Header>
            <Card.Meta>
              <span>#{recipe.recipe_id}</span>
            </Card.Meta>
            <Link as={`/recipe/${recipe.recipe_id}`} href={`/recipe?id=${recipe.recipe_id}`}>
              <a>View Menu</a>
            </Link>
          </Card.Content>
        </Card>
      </Grid.Column>
    ));
  
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>{renderList()}</Grid.Row>
      </Grid>
    </div>
  );
};

export default CardRecipe;
