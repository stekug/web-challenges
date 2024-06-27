import { useState } from "react";
import React from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleCreateUser(name, email) {
    setName(name);
    setEmail(email);
    console.log("ok", email, name);
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onSubmit={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
