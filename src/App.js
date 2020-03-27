import React from "react";
import { Container } from "semantic-ui-react";
import Contacts from "./contacts";

export default function App() {
  return (
    <Container>
      <h1>React Hooks Context Demo</h1>
      <Contacts />
    </Container>
  );
}
