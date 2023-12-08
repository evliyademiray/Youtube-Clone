import React, { useState } from "react";

const StringArea = ({ text, max }) => {
  const [expand, setExpand] = useState();

  let shortText = text;

  if (text.length > max && !expand) {
    shortText = text.slice(0, max) + "...";
  }

  return (
    <p onClick={() => setExpand(!expand)}>
      {shortText.split("\n").map((line) => (
        <span>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
};

export default StringArea;
