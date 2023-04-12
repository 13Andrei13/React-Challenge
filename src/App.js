import "./styles.css";
import { PEOPLE } from "./people.ts";
import People from "./People/People.js";
import Checkbox from "./CheckBox/Checkbox";
import React, { useState } from "react";
import Form from "./SearchForm/Form";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const nameChangeHandler = (nameValue) => {
    setEnteredName(nameValue);
    console.log(enteredName);
  };
  const filterChangeHandler = (checkValue) => {
    setIsChecked(checkValue);
    console.log(isChecked);
  };
  return (
    <>
      <div className="App">
        <h1>
          Deepstash Challenge{" "}
          <span role="img" aria-label="rocket">
            🚀
            <Form onName={nameChangeHandler} />
            <Checkbox onCheckbox={filterChangeHandler} />
            <People people={PEOPLE} checkBox={isChecked} name={enteredName} />
          </span>
        </h1>
      </div>
    </>
  );
}
