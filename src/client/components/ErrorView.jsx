import React from "react";

export function ErrorView({ error, reload }) {
  return (
    <>
      <div>
        Something went wrong
        <br />
        {error.toString()}
      </div>
      {reload && <button onClick={reload}>Try again</button>}
    </>
  );
}
