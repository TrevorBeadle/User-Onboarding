import React, { useState, useEffect } from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onChange = e => {
    const { name, type, value, checked } = e.target;
    const valueUsed = type === "checkbox" ? checked : value;
    change(name, valueUsed);
  };

  const onSubmit = e => {
    e.preventDefault();
    submit();
  };

  return (
    <form className="container" onSubmit={onSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={onChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
        />
      </label>
      <label htmlFor="terms">
        <input
          type="checkbox"
          name="terms"
          value={values.terms}
          onChange={onChange}
        />
      </label>
    </form>
  );
}
