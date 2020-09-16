import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";

const initialForm = { name: "", email: "", password: "", terms: false };
const initialError = { name: "", email: "", password: "", terms: "" };

function App() {
  // declare initial state
  const [users, setUsers] = useState([]);
  const [formState, setFormState] = useState(initialForm);
  const [errorState, setErrorState] = useState(initialError);
  const [disabled, setDisabled] = useState(true);

  const submit = () => {
    const newUser = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      password: formState.password.trim(),
    };
  };

  return (
    <div className="container">
      <Form
        values={formState}
        submit={submit}
        change={formChange}
        disabled={disabled}
        errors={errors}
      />
    </div>
  );
}

export default App;
