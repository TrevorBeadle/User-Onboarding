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
      <div className="form-group submit">
        <h2>Sign Up!</h2>
        <button disabled={disabled}>Submit</button>

        <div className="errors">
          <div className="error">{errors.first_name}</div>
          <div className="error">{errors.last_name}</div>
          <div className="error">{errors.email}</div>
          <div className="error">{errors.password}</div>
          <div className="error">{errors.terms}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <label htmlFor="first_name">
          First Name
          <input
            type="text"
            name="first_name"
            value={values.first_name}
            onChange={onChange}
          />
        </label>
        <label htmlFor="last_name">
          Last Name
          <input
            type="text"
            name="last_name"
            value={values.last_name}
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
      </div>

      <div className="form-group checkboxes">
        <label htmlFor="terms">
          Do you agree to the terms and conditions?
          <input
            type="checkbox"
            name="terms"
            value={values.terms}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
}
