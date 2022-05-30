import React from "react";
import { WindupChildren, Pace } from "windups";

function CommentLine({ text, color }) {
  return (
    <div className="comment-line" style={{ color }}>
      <WindupChildren>
        <Pace getPace={(char) => 40}>{`// ${text}`}</Pace>
      </WindupChildren>
    </div>
  );
}

export default CommentLine;
