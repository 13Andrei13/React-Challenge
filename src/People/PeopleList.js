import React, { useState } from "react";
import PeopleItem from "./PeopleItem";
import "./PeopleList.css";

const PeopleList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="person-list__fallback">Found no people.</h2>;
  }
  const filteredPeopleByCheck = props.items.filter((item) => {
    if (props.check === true) {
      if (item.bio) {
        return item;
      }
    } else {
      return item;
    }
  });
  const filteredPeople = filteredPeopleByCheck.filter((item) => {
    let name = item.firstName.toString() + item.lastName.toString();
    if (name.toLowerCase().includes(props.name.toLowerCase())) {
      return item;
    }
  });
  const coldPeople = filteredPeople.filter(
    (person) => person.reaction === "🥶"
  );
  const smartPeople = filteredPeople.filter(
    (person) => person.reaction === "💡"
  );

  return (
    <ul className="person-list">
      {smartPeople.length > 0 && (
        <>
          <h2>Reacted with 💡:</h2>
          {smartPeople.map((people) => (
            <PeopleItem
              key={people.firstName}
              image={people.image}
              firstName={people.firstName}
              lastName={people.lastName}
              bio={people.bio}
            />
          ))}
        </>
      )}
      {coldPeople.length > 0 && (
        <>
          <h2>Reacted with 🥶:</h2>
          {coldPeople.map((people) => (
            <PeopleItem
              key={people.firstName}
              image={people.image}
              firstName={people.firstName}
              lastName={people.lastName}
              bio={people.bio}
            />
          ))}
        </>
      )}
    </ul>
  );
};
export default PeopleList;
