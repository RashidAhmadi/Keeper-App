import React from "react";
import Card from "../components/Card"
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    document.body.className = "contact-body";
  }, []);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card/>
    </div>
  );
}

export default Contact;