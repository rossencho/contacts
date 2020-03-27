import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ContactForm from "./components/contact-form";
import ContactTable from "./components/contact-table";
import { ContactContextProvider } from "./contexts/contact-context";

export default function ContactView() {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">Contacts</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </ContactContextProvider>
  );
}
