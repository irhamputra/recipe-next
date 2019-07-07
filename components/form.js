import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

const FormSearch = ({ getRecipe }) => {
  return (
    <Form onSubmit={getRecipe}>
      <Form.Field>
        <Input placeholder="Search recipe" type="name" name="search" />
      </Form.Field>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default FormSearch;
