import React from "react";
import { WindupChildren, Pace } from "windups";

function LargeHeading({ text, color }) {
  return (
    <h2 className="large-heading mb-0" style={{ color: color }}>
      <WindupChildren>
        <Pace getPace={(char) => (char === " " ? 600 : 40)}>{text}</Pace>
      </WindupChildren>
    </h2>
  );
}

export default LargeHeading;
