import React from "react";
import Card from "../components/Card"
import { useEffect } from "react";
import contacts from "../contacts";

function createCard(contact){
  return <Card 
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}

  />
}
function Contact() {
  
  return (
    <div className="contact-body">
      <h1 className="heading">Contact Our Team</h1>
      {contacts.map(createCard)}
      
    </div>

    
  );
}

export default Contact;