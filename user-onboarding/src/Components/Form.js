import React, { useState, useEffect } from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onChange = e => {
    const { name, type, value, checked } = e.target;
    const valueUsed = type === "checkbox" ? checked : value;
    change(name, valueUsed);
  };

  return (
    <form classname="container" onSumbit={onSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={onChange}
        />
      </label>
    </form>
  );
}
