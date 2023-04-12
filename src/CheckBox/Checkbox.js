import React from "react";

import { useState, useEffect } from "react";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const check = () => {
    setIsChecked((prev) => !prev);
  };
  useEffect(() => {
    props.onCheckbox(isChecked);
  }, [isChecked, props]);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" checked={isChecked} onChange={check} />
        <span>Only show the peope with bio</span>
      </label>
    </div>
  );
};
export default Checkbox;
