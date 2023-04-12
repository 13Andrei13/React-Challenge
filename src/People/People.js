import React, { useState } from "react";
import PeopleList from "./PeopleList";
function People(props) {
  return (
    <li>
      <PeopleList
        items={props.people}
        check={props.checkBox}
        name={props.name}
      />
    </li>
  );
}

export default People;
