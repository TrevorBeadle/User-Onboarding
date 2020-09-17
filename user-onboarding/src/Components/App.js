import React, { useState, useEffect } from "react";
import Form from "./Form";
import axios from "axios";
import * as yup from "yup";
import schema from "../Validation/schema";
import User from "./User";
import "./App.css";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms: false,
};
const initialError = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms: "",
};

function App() {
  // declare initial state
  const [users, setUsers] = useState([]);
  const [formState, setFormState] = useState(initialForm);
  const [errorState, setErrorState] = useState(initialError);
  const [disabled, setDisabled] = useState(true);

  // validate function
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setErrorState({
          ...errorState,
          [name]: "",
        });
      })
      .catch(err => {
        setErrorState({
          ...errorState,
          [name]: err.errors[0],
        });
      });
  };

  // change function
  const change = (name, value) => {
    validate(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit function
  const submit = () => {
    const newUser = {
      first_name: formState.first_name.trim(),
      last_name: formState.last_name.trim(),
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
        setUsers(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  // change button status when formState changes
  useEffect(() => {
    schema.isValid(formState).then(valid => {
      setDisabled(!valid);
    });
  }, [formState]);

  return (
    <div className="container">
      <Form
        values={formState}
        submit={submit}
        change={change}
        disabled={disabled}
        errors={errorState}
      />
      {users.map(user => {
        return <User details={user} />;
      })}
    </div>
  );
}

export default App;
