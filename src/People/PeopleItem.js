import React, { useState } from "react";
import "./PeopleItem.css";

function PeopleItem(props) {
  return (
    <li>
      <div class="people-grid">
        <div class="person-image">
          <img src={props.image} />
        </div>
        <div class="person-info">
          <h2 class="person-name">
            {props.firstName} {props.lastName}{" "}
          </h2>
          <p class="person-bio">{props.bio}</p>
        </div>
      </div>
    </li>
  );
}

export default PeopleItem;


