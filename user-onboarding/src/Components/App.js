import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import axios from "axios";

const initialForm = { name: "", email: "", password: "", terms: false };
const initialError = { name: "", email: "", password: "", terms: "" };

function App() {
  // declare initial state
  const [users, setUsers] = useState([]);
  const [formState, setFormState] = useState(initialForm);
  const [errorState, setErrorState] = useState(initialError);
  const [disabled, setDisabled] = useState(true);

  // change function
  const change = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit function
  const submit = () => {
    const newUser = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      password: formState.password.trim(),
      terms: formState.terms,
    };

    // post new user to API on submit
    axios
      .post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([...users, res.data]);
        setFormState(initialForm);
      })
      .catch(err => console.log(err));
  };

  // get users from API on mount
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <Form
        values={formState}
        submit={submit}
        change={change}
        disabled={disabled}
        // errors={errors}
      />
    </div>
  );
}

export default App;
