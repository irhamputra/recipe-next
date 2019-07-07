import React from "react";
import Nav from "./nav";
import { Container } from "semantic-ui-react";

const Layout = props => (
  <div>
    <Container>
      <Nav />
      {props.children}
    </Container>
  </div>
);

export default Layout;
