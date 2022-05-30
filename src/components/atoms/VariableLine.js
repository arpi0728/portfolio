import React from "react";
import { WindupChildren } from "windups";

function VariableLine({ data }) {
  return (
    <h3 className="text-heading">
      <WindupChildren>{data}</WindupChildren>
    </h3>
  );
}

export default VariableLine;
