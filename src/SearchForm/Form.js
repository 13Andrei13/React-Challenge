import React, { useState, useEffect } from "react";

import "./Form.css";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (event) => {
    event.preventDefault();
    setEnteredName(event.target.value);
  };
  useEffect(() => {
    props.onName(enteredName);
  }, [enteredName, props]);

  return (
    <form className="form__control">
      <label> Name</label>
      <input type="text" value={enteredName} onChange={nameChangeHandler} />
    </form>
  );
};

export default Form;
