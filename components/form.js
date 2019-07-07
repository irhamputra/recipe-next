import React from "react";
import { Button, Form } from "semantic-ui-react";

const FormSearch = ({ getRecipe }) => {
  return (
    <Form onSubmit={getRecipe}>
      <Form.Field>
        <input placeholder="Search recipe" type="name" name="search" />
      </Form.Field>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default FormSearch;
