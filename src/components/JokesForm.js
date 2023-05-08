import React from "react";

function JokesForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Type:
        <select
          value={props.type}
          onChange={(event) => props.setType(event.target.value)}
        >
          <option value="single">Single</option>
          <option value="twopart">Two-Part</option>
          <option value="">Both</option>
        </select>
      </label>
      <br />
      <label>
        Amount (5-10):
        <input
          type="number"
          min="5"
          max="10"
          value={props.amount}
          onChange={(event) => props.setAmount(event.target.value)}
        />
      </label>
    </form>
  );
}

export default JokesForm;
