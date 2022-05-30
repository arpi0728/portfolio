import React from "react";
import { WindupChildren, Pace } from "windups";

function SmallHeading({ text, color }) {
  return (
    <h3 className="small-heading" style={{ color: color }}>
      <WindupChildren>
        <Pace getPace={(char) => (char === " " ? 600 : 40)}>{text}</Pace>
      </WindupChildren>
    </h3>
  );
}

export default SmallHeading;
