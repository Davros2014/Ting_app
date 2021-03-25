import React from "react";

const ToggleSwitch = ({ id, checked, onChange }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        defaultChecked={checked}
        name="toggleSwitch"
        onChange={onChange}
        id={id}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
