import React from "react";

export function InputField({ label, onChangeValue, value }) {
  return (
    <div>
      <label>
        {label}:{" "}
        <input
          type="text"
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
        />
      </label>
    </div>
  );
}
