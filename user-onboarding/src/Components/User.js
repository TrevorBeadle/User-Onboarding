import React from "react";

export default function User({ details }) {
  return (
    <div className="user container">
      <h3>{`${details.first_name} ${details.last_name}`}</h3>
      <p>{details.email}</p>
    </div>
  );
}
