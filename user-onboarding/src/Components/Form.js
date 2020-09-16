import React from "react";

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
      <h2>Sign Up!</h2>
      <button disabled={disabled}>Submit</button>
      <div className="errors">
        <div className="error">{errors.username}</div>
        <div className="error">{errors.email}</div>
        <div className="error">{errors.password}</div>
        <div className="error">{errors.terms}</div>
      </div>
      <label htmlFor="username">
        UserName
        <input
          type="text"
          name="username"
          value={values.username}
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
