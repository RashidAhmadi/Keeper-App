import React from "react";
import Card from "../components/Card"
import { useEffect } from "react";
import contacts from "../contacts";
function Contact() {
  
  return (
    <div className="contact-body">
      <h1 className="heading">Contact Our Team</h1>
      <Card
      name={contacts[0].name}
      img={contacts[0].imgURL}
      tel={contacts[0].phone}
      email={contacts[0].email}
      />

      <Card
      name={contacts[1].name}
      img={contacts[1].imgURL}
      tel={contacts[1].phone}
      email={contacts[1].email}
      />

      <Card
      name={contacts[2].name}
      img={contacts[2].imgURL}
      tel={contacts[2].phone}
      email={contacts[2].email}
      />
    </div>

    
  );
}

export default Contact;